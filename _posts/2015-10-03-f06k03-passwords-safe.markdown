---
layout: post
title:  "I need to keep my passphrases safe"
ref: f06k03
lang: English
description: "Kit #3. I need to keep my passphrases safe"
code: f-06
icon: icon_f06k03.png
top: top-4
left: "left-2-5 wide"
---

##### I keep all important passphrases in my paper agenda and in my mobile phone and my browser remembers all the passphrases I use online. That is probably not safe. Is there a better solution?

*You’re using several online services and have a different passphrase for each because it’s safer. You can’t remember all of them so you allowed your browser to remember them when you first logged in. You also have other important and sensitive details to remember, such as PINs, credit card numbers and important phone numbers. Since it’s impossible to remember them all, you keep these numbers and passphrases on paper and in a text document on your desktop. If the paper agenda is lost you’ll be locked out of your accounts. If someone gains physical access to your computer or mobile phone and finds the paper agenda, too, then gaining access to all of your accounts is trivial.*

**What you should do**

There are a few options for good passphrase management and many poor passphrase management practices. Here is a list of what you should and *shouldn’t* do.

+ Never store passphrases or other sensitive details in a text file on your desktop or in any other way that would permit intruders into your computer to easily find them.
+ Don’t store passphrases in your browser’s passphrase manager. Allowing your browser to “remember” passphrases to online services such as your email or Facebook account means that it stores your passphrases in a single unencrypted file that can be easily recovered and read by anyone who gains access to your computer, either physically or remotely. For example, someone could get remote access via a malware programme. If this happens, see [Kit #1: My email, Facebook or Twitter account was hijacked]({{ site.baseurl }}/f08k01-accounts-hijacked). From the browser settings menu, stop storing your passphrases, delete those that are already stored in your browser, and disallow the browser from ever asking you to store your log-in information again. ([Chrome](https://support.google.com/chrome/answer/95606), [Firefox](https://support.mozilla.org/t5/Protect-your-privacy/Password-Manager-Remember-delete-change-and-import-saved/ta-p/1380154#w_viewing-and-deleting-passwords))
+ Install a standalone passphrase manager application. This allows you to securely store hundreds of different passwords for all of your different accounts without needing to remember them. You can easily copy and paste the saved passphrases from the application into online forms when you need to log in. The software is designed so that you never need to display the passphrase on your screen. And because you do not need to type them it protects you from some sophisticated monitoring techniques, particularly from [shoulder surfing](https://en.wikipedia.org/wiki/Shoulder_surfing_%28computer_security%29). If someone takes control over your computer, they won’t be able to access any of this information without knowing the master passphrase to your passphrase manager application.
+ A recommended passphrase manager application is [KeePassX](https://ssd.eff.org/en/module/how-use-keepassx){:target="_blank"} for Windows, Mac and GNU/Linux. KeePassX is easy to use, doesn’t need installation and can be moved around with USB storage. Some passphrase managers, including KeePassX, allow you to not only store passphrases, but also any type of text or file types as attachments that you can lock under the master passphrase.
+ Make use of KeePassX's password generation tool to create unique random passwords for each of your accounts.

**To keep in mind**

+ Consider revisiting all your passwords and changing them to passphrases, which are longer and more secure.
+ Consider changing all of your passphrases annually.
+ Be aware that not even the use of standalone password managers can 100% protect you from password theft, particularly if your computer is infected by a sophisticated malware. However, the use of a password manager such as KeePassX significantly decreases the risk of such thefts.
+ When using a password manager, remember that the security of each of your stored passwords depends on the strength of the master password, so make sure it is long and difficult to guess.
+ It is essential to make regular backups of your KeePassX database file. If you don't have a backup and you lose of damage the device on which the file stored, then you will have lost all of the stored passwords.

**Where to find more help**

+ Create secure passphrases using [Diceware](https://ssd.eff.org/en/module/animated-overview-how-make-super-secure-password-using-dice){:target="_blank"}.
+ Learn more about creating [passphrases that you can memorise](https://firstlook.org/theintercept/2015/03/26/passphrases-can-memorize-attackers-cant-guess/){:target="_blank"}.
+ See [Kit #4. I need to carry around sensitive data in a secure manner]({{ site.baseurl }}/f02k04-sensitive-data).
+ [Create and maintain secure passphrases](https://securityinabox.org/en/guide/passwords/){:target="_blank"}.
+ Get started using [KeePassX – Secure passphrase storage](https://ssd.eff.org/en/module/how-use-keepassx){:target="_blank"}.
+ [Use KeePassX in your browser, across your computers and on your phone](http://www.howtogeek.com/165882/how-to-use-keepass-in-your-browser-across-your-computers-and-on-your-phone/){:target="_blank"}.
