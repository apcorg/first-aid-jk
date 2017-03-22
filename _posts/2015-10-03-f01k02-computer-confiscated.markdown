---
layout: post
title:  "If the content of my computer gets confiscated, I am afraid it will compromise my safety"
ref: f01k02
lang: English
description: "Kit #2. If the content of my computer gets confiscated, I am afraid it will compromise my safety"
code: f-01
icon: icon_f01k02.png
top: top-1-5
left: "left-1 wide"
---

##### My computer might get lost, stolen or confiscated. Is there anything I can do to minimise the risk that its content will compromise me or others?

*Computers often get lost or stolen and can also get confiscated by authorities who are after your data. Your devices are vaults full of sensitive data. If this data is discovered by someone untrusted, it can do a good deal of damage. For example, if you manage your emails using an email client such as Thunderbird or Outlook it’s likely that the programme contains private information, such as your friends’ contacts and sensitive messages. If your computer is lost, stolen or confiscated, the new owners gain access to all this information. What can be even more damaging is if they start acting like impostors, writing to your contacts pretending that they are you.*

**What you should do**

Not much can be done once your computer is lost, other than changing the passwords and securing your online accounts (see [Kit #1]({{ site.baseurl/f08k01-accounts-hijacked }}) for details). So it is all the more important to prepare your system in such a way that the leakage of sensitive data is minimal if it gets lost.

**Prepare in advance**
+ Use passphrases. As a most basic protection against information leakage due to an opportunistic (not targeted) theft or loss, use a desktop passphrase. Configure your device to require a passphrase when it is switched on, and activate a passphrase-protected screen saver or lock screen that automatically activates after five minutes of computer or device inactivity. ([Windows](https://support.microsoft.com/en-us/help/17185), [OS X](https://support.apple.com/en-us/HT204379))
+ Please keep in mind that this makes it difficult for someone with physical access to gain access to the data and applications on your computer or device, but circumvention of a passphrase is relatively easy for experienced technologists or law enforcement.
+ Keep your user accounts safe. Don’t let your browser store your passphrases. Don’t store them in a text file on your desktop. Don’t send them to yourself by email or SMS. Don’t write them down on a piece of paper on your desk. Passphrases to your online user accounts need to be either in your mind or stored in an encrypted manner [(see Kit #3)]({{ site.baseurl }}/f06k03-passwords-safe/).
+ Protect your email. Make sure your email client permits you to passphrase-protect access to your profile ([Outlook](https://support.office.com/en-us/article/Change-the-password-for-an-Outlook-Data-File-pst-2d27924a-b970-42a1-af53-052852d2060c), [Thunderbird](https://addons.mozilla.org/en-us/thunderbird/addon/startupmaster/)). While this helps against a common thief, this won’t stop computer experts who might be interested in getting to your data.
+ Encrypt sensitive files. Get into a habit of separating even mildly sensitive data from other data on your computer, and keeping sensitive data encrypted. Use a specific encryption software such as the free/libre and [“available source”](https://en.wikipedia.org/wiki/Open-source_software#Open-source_vs._source-available){:target="_blank"} VeraCrypt to [create an encrypted volume (disk-space)](https://veracrypt.codeplex.com/wikipage?title=Beginner%27s%20Tutorial) on your hard drive. Place your sensitive information in the encrypted volume. An encrypted volume is like a vault that can be opened only by you or others with whom you share the passphrase.
+ Full Disk Encryption. You can choose to encrypt your entire hard disk to ensure that you are the only person who can access the content using the passphrase. At the level of the operating system, you can encrypt the entire computer, which protects everything while the computer is off. Note that once the disk is decrypted and the computer is on or hibernating, the data is generally accessible until the disk is fully encrypted again (usually by switching the computer off). Recent versions of [Windows](https://support.microsoft.com/en-us/instantanswers/e7d75dd2-29c2-16ac-f03d-20cfdf54202f/turn-on-device-encryption) and [OS X](https://support.apple.com/en-us/HT204837) come with built-in disk encryption tools, but for an open-source and [audited](https://ostif.org/the-veracrypt-audit-results/) tool you can use [VeraCrypt](https://veracrypt.codeplex.com/wikipage?title=System%20Encryption). It is extremely important to note that without your encryption passphrase there will be absolutely no way to access the data (which is the point; however, this potential loss of control of your own data is in itself a risk).
+ Consider device tracking for particular situations. There are tools that can try to track the location of your laptop if you lose it, but be aware of the limitations and risks if you choose to use to it. These tools will try to locate your device using the location of the wi-fi network it is connected to. Obviously, it will not work if the wi-fi is turned off on your laptop, or if someone wipes the hard disk (or if it is just powered off). Even if you are able to get a location, actually recovering the device may not be simple. In addition, remember that installing these tools will give the companies who run the service access to the location of your device at any time, which could put you at risk. [Windows 10](https://account.microsoft.com/devices/about) and [OS X](https://support.apple.com/kb/PH18991) have built-in device-tracking features, while [Prey](https://www.preyproject.com/) is a third-party software with an open-source client.
+ Backup! Backing up your data will not prevent it from being compromised, but it will ensure you still have access to a copy if your device gets lost. [This guide](https://securityinabox.org/en/guide/backup/) will help in developing a backup strategy.

**Where to find more help**

+ [Protect sensitive files on your computer.](https://securityinabox.org/en/guide/secure-file-storage/){:target="_blank"}
+ [Create and maintain secure passphrases.](https://securityinabox.org/en/guide/passwords){:target="_blank"}
+ [Protect the content of your Mozilla Thunderbird email client.](http://kb.mozillazine.org/Protecting_the_contents_of_the_profile_-_mail){:target="_blank"}
+ [Learn about GNU/Linux operating systems.](http://getgnulinux.org/en/){:target="_blank"}
