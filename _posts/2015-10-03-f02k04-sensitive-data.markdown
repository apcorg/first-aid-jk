---
layout: post
title:  "I need to carry around sensitive data in a secure manner"
ref: f02k04
lang: English
description: "Kit #4. I need to carry around sensitive data in a secure manner"
code: f-02
icon: icon_f02k04.png
top:
left: left-2-5
---

##### I have sensitive data that I need to physically transport between two or more places. How do I make sure it stays safe?

*You are about to travel or move around between different locations in your city for an important meeting, likely without internet access. You need to bring with you sensitive data that you aren’t comfortable uploading to a server or other online space.*

**What you should do**

In order to move around with sensitive data, you will need to not only encrypt the data but obscure its very existence.

+ Obscure the data physically. Consider transporting files on a small device instead of on your laptop. SD cards and USB drives can store a huge amount of data in a very small device. These devices can be hidden (and lost!) just about anywhere. Insert the SD card into an otherwise harmless electronic device if you or your bags must pass through a metal detector or x-ray, such as an empty (clean) mobile phone or camera.
+ Once you’ve decided how you’re going to transport the data, encrypt the data. TrueCrypt [[1](https://www.apc.org/en/irhr/digital-security-first-aid-kit-4#fn691571595569cf5eec1189){:target="_blank"}] or GPGTools can encrypt any directory or file (see [Kit #2]({{ site.baseurl }}/f01k02-computer-confiscated/). If the content of my computer gets confiscated, I am afraid it will compromise my safety).
+ Alternatively, encrypt the entire drive. Depending on what device or volume you will store your sensitive data in, consider encrypting everything, not just the sensitive files. If you do this, keep in mind that it may be more obvious that you are hiding something.
+ Obscure the data digitally. If you choose to secure your data in an encrypted volume with TrueCrypt, you can also make the volume “hidden”, which can help you avoid the possibility of an adversary finding your files and asking or forcing you to reveal the decryption passphrase. Or, you might simply rename the encrypted file to something unassuming like “My Music” and place it within a typical directory structure.

**Keep in mind**

+ The way USB drives and SD cards store data in solid state means they are very reliable but also makes wiping data off of them difficult. Sometimes the only safe way to destroy the data to avoid eventual recovery is to literally destroy the device.
+ Note that passphrase-protection of a directory or file is not encryption and is very easy to circumvent.
+ If the device containing the sensitive data is discovered and accessed, an unusual operating system such as GNU/Linux or the immediate appearance of a full-disk decryption prompt may in and of itself reveal that you are hiding something. Sometimes it is best to use the hide-in-plain-sight tactic.

**Where to find more help**

+ Use a [persistent volume.](https://tails.boum.org/doc/first_steps/persistence/index.en.html){:target="_blank"}
+ Learn how to create hidden volumes with TrueCrypt.

[1] Note: In September 2015, [critical security flaws](https://thehackernews.com/2015/09/truecrypt-encryption-software.html){:target="_blank"} were reported in TrueCrypt, the open source software for file and disk encryption. As a result, we are reviewing our advice and we support [these recommendations](https://securityinabox.org/en/blog/08-10-2015/truecrypts-security-flaws-what-now){:target="_blank"} for alternative tools for secure file storage.

