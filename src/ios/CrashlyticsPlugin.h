//
//  CrashlyticsPlugin.h
//
//  Created by Francesco Verheye on 03/12/14.
//
//

#import <Foundation/Foundation.h>
#import <Cordova/CDV.h>

@interface CrashlyticsPlugin : CDVPlugin <UIAlertViewDelegate>

- (void)setUserIdentifier:(CDVInvokedUrlCommand*)command;
- (void)setUserName:(CDVInvokedUrlCommand*)command;
- (void)setUserEmail:(CDVInvokedUrlCommand*)command;

- (void)addLog:(CDVInvokedUrlCommand*)command;

- (void)setObjectValueForKey:(CDVInvokedUrlCommand*)command;
- (void)setIntValueForKey:(CDVInvokedUrlCommand*)command;
- (void)setBoolValueForKey:(CDVInvokedUrlCommand*)command;
- (void)setFloatValueForKey:(CDVInvokedUrlCommand*)command;

- (void)sendCrash:(CDVInvokedUrlCommand*)command;

@end
