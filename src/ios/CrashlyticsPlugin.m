//
//  CrashlyticsPlugin.m
//
//  Created by Francesco Verheye on 03/12/14.
//
//

#import "CrashlyticsPlugin.h"
#import <Crashlytics/Crashlytics.h>

@implementation CrashlyticsPlugin{
    NSString *_title;
    NSString *_description;
    NSString *_positiveButtonText;
    NSString *_negativeButtonText;
}

#pragma mark - Logging
- (void)addLog:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *logMessage = [options objectForKey:@"message"];
    if(logMessage)
    {
        CLSNSLog(@"%@",logMessage);
    }
}

#pragma mark - User Information

- (void)setUserIdentifier:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *identifier = [options objectForKey:@"value"];
    if(identifier)
    {
        [[Crashlytics sharedInstance] setUserIdentifier:identifier];
    }
}

- (void)setUserName:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *username = [options objectForKey:@"value"];
    if(username)
    {
        [[Crashlytics sharedInstance] setUserName:username];
    }
}

- (void)setEmail:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *email = [options objectForKey:@"value"];
    if(email)
    {
        [[Crashlytics sharedInstance] setUserEmail:email];
    }
}

#pragma mark ) Crash
- (void)sendCrash:(CDVInvokedUrlCommand*)command
{
    [[Crashlytics sharedInstance] crash];
}

#pragma mark - Custom Keys
- (void)setObjectValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSString *value = [options objectForKey:@"value"];
    NSString *key = [options objectForKey:@"key"];
    if(value && key)
    {
        [[Crashlytics sharedInstance] setObjectValue:value forKey:key];
    }
}

- (void)setIntValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    NSInteger value = [[options objectForKey:@"value"] integerValue];
    NSString *key = [options objectForKey:@"key"];
    if(key)
    {
        [[Crashlytics sharedInstance] setIntValue:value forKey:key];
    }
}

- (void)setBoolValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    BOOL value = [[options objectForKey:@"value"] boolValue];
    NSString *key = [options objectForKey:@"key"];
    if(key)
    {
        [[Crashlytics sharedInstance] setBoolValue:value forKey:key];
    }
}

- (void)setFloatValueForKey:(CDVInvokedUrlCommand*)command
{
    NSMutableDictionary *options = [command argumentAtIndex:0];
    float value = [[options objectForKey:@"value"] floatValue];
    NSString *key = [options objectForKey:@"key"];
    if(key)
    {
        [[Crashlytics sharedInstance] setFloatValue:value forKey:key];
    }
}

@end
