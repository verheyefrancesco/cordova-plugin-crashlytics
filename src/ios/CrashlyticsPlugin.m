//
//  CrashlyticsPlugin.m
//
//  Created by Francesco Verheye on 03/12/14.
//
//

#import "CrashlyticsPlugin.h"

@implementation CrashlyticsPlugin{
    NSString *_title;
    NSString *_description;
    NSString *_positiveButtonText;
    NSString *_negativeButtonText;
}

- (void)show:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    
    [self setDefaults];
    
    [self readParams:options];
    
    [self showAlertView];
}

-(void) setDefaults
{
    _title = @"Title";
    _description = nil;
    _positiveButtonText = @"Yes";
    _negativeButtonText = @"No";
}

-(void) readParams:(NSDictionary*) params
{
    if([params objectForKey:@"title"])
    {
        _title = [params objectForKey:@"title"];
    }
    if([params objectForKey:@"description"])
    {
        _description = [params objectForKey:@"description"];
    }
    if([params objectForKey:@"positiveButtonText"])
    {
        _positiveButtonText = [params objectForKey:@"positiveButtonText"];
    }
    if([params objectForKey:@"negativeButtonText"])
    {
        _negativeButtonText = [params objectForKey:@"negativeButtonText"];
    }
}

-(void) showAlertView
{
    UIAlertView *alert = [[UIAlertView alloc]initWithTitle:_title
                                                   message:_description
                                                  delegate:self
                                         cancelButtonTitle:_negativeButtonText
                                         otherButtonTitles:_positiveButtonText, nil];
    [alert show];
}

#pragma mark UIActionSheetDelegate
- (void) alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex
{
    if (buttonIndex == 0)
    {
        // negativeButton
        [self jsActionSelected:NO];
    }
    else
    {
        // positiveButton
        [self jsActionSelected:YES];
    }
}

#pragma mark - JS API
-(void) jsActionSelected:(BOOL)isPositiveButton
{
    NSMutableDictionary *resultDic = [NSMutableDictionary dictionary];
    if(isPositiveButton)
    {
        [resultDic setValue:@"positiveButton" forKey:@"action"];
        [resultDic setValue:_positiveButtonText forKey:@"buttonText"];
    }
    else
    {
        [resultDic setValue:@"negativeButton" forKey:@"action"];
        [resultDic setValue:_negativeButtonText forKey:@"buttonText"];
    }

    NSError * err;
    NSData * jsonData = [NSJSONSerialization dataWithJSONObject:resultDic options:0 error:&err];
    NSString * result = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
    
    result = [result stringByReplacingOccurrencesOfString:@"\"" withString:@"&#34;"];
    
    NSString* jsCallback = [NSString stringWithFormat:@"confirmPanelPlugin._actionSelected(\"%@\");", result];
    [self.commandDelegate evalJs:jsCallback];
}

@end
