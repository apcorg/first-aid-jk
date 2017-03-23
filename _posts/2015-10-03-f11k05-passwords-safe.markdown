---
layout: post
title:  "I need to secure my mobile device and communication"
ref: f11k05
lang: English
description: "Kit #5. I need to secure my mobile device and communication"
code: f-11
icon: icon_f11k05.png
top: top-9-5
left: "left-2-5 wide"
---

##### I like the convenience of using my mobile device to communicate with friends, family and colleagues alike, but I’m concerned about my privacy. Is there a way I can safely use my personal mobile for sensitive communications?

*You are security conscious and want to communicate securely with your mobile device just like you do with your laptop. You might want to have access to your work email on your mobile, to be able to browse the web on your phone anonymously, or even circumvent censorship with your mobile connection. But you’re not sure how to do all of these things in a secure way or what to avoid.*

Mobile smartphones are small, expensive and can contain a huge amount of information. Mobiles are not built with security and privacy in mind. Call logs, messages and geographic positions are shared with and stored by the mobile company, whom you must trust to implement good security practices and comply with local laws to protect your privacy. In most countries, the government, a possible adversary, can easily gain access to that data.

In addition, modern smartphones store a wide array of your personal information, such as photos, contacts, chat logs and browsing history, all of which have the potential to be leaked.

**What you should do**

+ Avoid standalone applications when possible. Mobile apps such as Facebook and Twitter are not privacy-friendly. To install them, you must give them permission to access, and in some cases control, many other services on your device. You cannot control their method of connection and by default many use insecure HTTP connections, not HTTPS, to connect to the internet. Use your mobile browser instead.
+ Review and restrict the permissions you grant to each of your installed apps ([Android](https://support.google.com/googleplay/answer/6270602), [iOS](https://support.apple.com/en-us/HT203033)). Keep in mind that you can not control every single thing an app seeks access to, so assess every app before installing it.
+ Assess the credibility of any apps before installing them. Check online reviews and ratings and make sure that the author is credible. Unless you are an advanced user, don't "[sideload](https://en.wikipedia.org/wiki/Sideloading)" apps, and only install apps from your phone's official app store for your phone (i.e. Google Play, iTunes).
+ Keep your phone's Bluetooth, wi-fi and GPS turned off when you're not using them.
+ Protect your media. Its highly advisable not to store any sensitive images or videos on your device in the first place because many common applications have access to your gallery. [ObscuraCam](https://securityinabox.org/en/guide/obscuracam/android/){:target="_blank"} is a mobile app that can blur out faces and remove identifying metadata from your images and videos if you need to share them.
+ Lock your device and SIMs. Enable SIM and screen locks on your device. By doing this, it prevents an opportunistic thief or adversary with average technical skills from changing the SIM or accessing your content. ([Android](https://www.howtogeek.com/259360/how-to-set-up-sim-card-lock-for-a-more-secure-android-phone/), [iOS](https://support.apple.com/en-us/HT201529))
+ Encrypt your device. Encrypting your relatively new Android or iPhone device and its data is a very easy and essential step to start with, and it protects the data in case of physical loss or confiscation. You just need to enable encryption and set a good passphrase to make sure your data is private and not accessible if the attacker has physical access to the device. Note that device encryption only protects your data as long as the device remains encrypted (usually when it is off). The encryption cannot protect devices that are on from data theft. ([Android](https://www.howtogeek.com/141953/how-to-encrypt-your-android-phone-and-why-you-might-want-to/), [iOS](https://ssd.eff.org/en/module/how-encrypt-your-iphone))
+ Browse anonymously. You can use Tor on your mobile by browsing the web with [Orfox](https://guardianproject.info/apps/orfox/) and [Orbot](https://guardianproject.info/apps/orbot/). Alternatively, you can use a VPN service like [Bitmask](https://riseup.net/en/vpn/how-to/android). ([See Kit #12. I need to access a blocked website anonymously]({{ site.baseurl }}/f05k12-blocked-website/){:target="_blank"} ).
+ Email with caution. Due to the [inherent problems](https://ssd.eff.org/en/module/problem-mobile-phones) with using mobile phones securely, avoid reading or writing sensitive email with your mobile. It is generally a bad idea to store your encryption keys (such as OpenPGP) on the device due to the risk of it being compromised. However, if it is absolutely necessary to check your PGP encrypted e-mail on your phone, then you can use the [K-9 e-mail app with OpenKeychain](https://k9mail.github.io/documentation/security/pgpmime_current.html). You may also consider creating a separate email and private/public OpenPGP key pair for use exclusively on your mobile.
+ Send and receive messages securely. With messaging, you are only as safe as the application you use. Signal is a highly recommended open-source messaging app that allows you to send end-to-end encrypted messages and video calls ([Android](https://ssd.eff.org/en/module/how-use-signal-android), [iOS](https://ssd.eff.org/en/module/how-use-signal-ios)). [Whatsapp](https://ssd.eff.org/en/module/how-use-whatsapp-android) offers many of the same security features and is considerably better than most other messaging apps, but there is [good reason](https://securityinabox.org/en/blog/2016-05-23/why-we-still-recommend-signal-over-whatsapp-even-though-they-both-use-end-to-end-encryption/) to stick with Signal for any sensitive conversations.
+ Avoid using plain SMS/text messages wherever possible as they can easily be monitored by your mobile service. If you know that you will be travelling to an area without an Internet connection then you can install the [Silence](https://silence.im/) app to encrypt your SMS messages. As with any encrypted messaging app, the contacts with whom you want to communicate will need to install it on their devices also. Bear in mind that even though your mobile service provider won't be able to read the actual message, they will still be able to see the metadata (i.e. the phone number with which you are communicating with, the time the message was sent, etc).
+ Speak confidentially. Keep in mind that the mobile’s microphone can be turned on by applications. Even switching off the phone isn’t good enough because the mobile phone provider (or the government via the provider) has the technical means to remotely activate the device. When talking about sensitive issues, take out the battery or keep the phone far away from you.
+ Backup your data. Frequently backup the important data on the device such as your contact list.
+ Revoke access. If your device was stolen, lost or confiscated you should immediately use a web browser to change the passphrases of the accounts you were logged into on your device. You can sign out of all active sessions on Facebook, Twitter and Gmail, for example. ([See Kit #1]( {{ site.baseurl}}/f08k01-accounts-hijacked ))
+ Remote wipe. If your device was stolen, lost or confiscated you might be able to remotely control your mobile device by sending some commands to wipe the data or locate its position, but such tools aren’t always guaranteed to work and they depend on several variables such as the data connection on the mobile, GPS, network strength and whether the device is on ([Android](https://support.google.com/accounts/answer/3265955), [iOS](https://www.apple.com/icloud/find-my-iphone.html))

**Where to find more help**

+ Learn about [encrypting your iPhone](https://ssd.eff.org/en/module/how-encrypt-your-iphone){:target="_blank"}.
+ Read the basic Android [security setup guide](https://securityinabox.org/en/guide/basic-setup/android){:target="_blank"}.
+ Learn about Android apps such as Signal, Orbot and Orweb from [The Guardian Project](https://play.google.com/store/apps/details?id=org.witness.sscphase1){:target="_blank"}.
