---
layout: post
title:  "Me preocupa mi seguridad en caso de que confisquen el contenido de mi computador"
ref: f01k02
lang: es
description: "Kit #2. If the content of my computer gets confiscated, I am afraid it will compromise my safety"
code: f-01
icon: icon_f-01.png
top: top-1-5
left: "left-1 wide"
---

##### My computer might get lost, stolen or confiscated. Is there anything I can do to minimise the risk that its content will compromise me or others?

*Computers often get lost or stolen and can also get confiscated by authorities who are after your data. Your devices are vaults full of sensitive data. If this data is discovered by someone untrusted, it can do a good deal of damage. For example, if you manage your emails using an email client such as Thunderbird or Outlook it’s likely that the programme contains private information, such as your friends’ contacts and sensitive messages. If your computer is lost, stolen or confiscated, the new owners gain access to all this information. What can be even more damaging is if they start acting like impostors, writing to your contacts pretending that they are you.*

**What you should do**

Not much can be done once your computer is lost. So you should prepare your system and use your computer in such a way that in the eventuality of its loss, the leakage of contacts and other sensitive data is minimal.

+ Use passphrases. As a most basic protection against information leakage due to an opportunistic (not targeted) theft or loss, use a desktop passphrase. Configure your device to require a passphrase when it is switched on, and activate a passphrase-protected screen saver or lock screen that automatically activates after five minutes of computer or device inactivity.
+ Please keep in mind that this makes it difficult for someone with physical access to gain access to the data and applications on your computer or device, but circumvention of a passphrase is relatively easy for experienced technologists or law enforcement.
+ Keep your user accounts safe. Don’t let your browser store your passphrases. Don’t store them in a text file on your desktop. Don’t send them to yourself by email or SMS. Don’t write them down on a piece of paper on your desk. Passphrases to your online user accounts need to be either in your mind or stored in an encrypted manner [(see Kit #3)]({{ site.url }}/f06k03-passwords-safe/).
+ Protect your email. Make sure your email client permits you to passphrase-protect access to your profile. While this helps against a common thief, this won’t stop computer experts who might be interested in getting to your data. If compromising the content of your emails poses a real threat to you, consider storing all data from your email client in an encrypted volume with TrueCrypt. [1] You can configure your mail client to prompt you for your passphrase the first time your client downloads new messages or sends messages. This can prevent someone from impersonating you.
+ Encrypt sensitive files. Get into a habit of separating even mildly sensitive data from other data on your computer, and keeping sensitive data encrypted. Use a specific encryption software such as the free/libre and [“available source”](https://en.wikipedia.org/wiki/Open-source_software#Open-source_vs._source-available) TrueCrypt to create an encrypted volume (disk-space) on your hard drive. Place your sensitive information in the encrypted volume. An encrypted volume is like a vault that can be opened only by you or others with whom you share the passphrase.
+ Encrypt the device’s drive. By using disk encryption, you guarantee that you are the only person who can access the content using the passphrase. At the level of the operating system, you can encrypt the entire computer, which protects everything while the computer is off. Note that once the disk is decrypted and the computer is on or hibernating, the data is generally accessible until the disk is fully encrypted again (usually by switching the computer off).

TrueCrypt works on Windows, Mac and GNU/Linux. Device encryption on Android and iOS can be enabled under device settings. If you are a GNU/Linux user you can [encrypt during the installation](https://firstlook.org/theintercept/2015/04/27/encrypting-laptop-like-mean/) process. It is extremely important to note that without your encryption passphrase there will be absolutely no way to access the data (which is the point; however, this potential loss of control of your own data is in itself a risk).

**Where to find more help**

+ [Protect sensitive files on your computer.](https://securityinabox.org/en/chapter-4)
+ [Create and maintain secure passphrases.](https://securityinabox.org/en/guide/passwords) 
+ [Protect the content of your Mozilla Thunderbird email client.](http://kb.mozillazine.org/Protecting_the_contents_of_the_profile_-_mail)
+ [Learn about GNU/Linux operating systems.](http://getgnulinux.org/en/)	
+ Learn about TrueCrypt.

[1] Note: In September 2015, critical security flaws were reported in TrueCrypt, the open source software for file and disk encryption. As a result, we are reviewing our advice and we support these recommendations for alternative tools for secure file storage.