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
+ Once you’ve decided how you’re going to transport the data, encrypt the data. [VeraCrypt](https://securityinabox.org/en/guide/veracrypt/windows/) is a tool that allows you to create an encrypted drive (called a "volume") inside what looks like a regular file where you can store your sensitive data. The drive will only be decrypted if you provide the correct password.
+ Obscure the data digitally. If you choose to secure your data in an encrypted volume with VeraCrypt, you can also make the volume “hidden”, which can help you avoid the possibility of an adversary finding your files and asking or forcing you to reveal the decryption passphrase. Or, you might simply rename the encrypted file to something unassuming like “My Music” and place it within a typical directory structure.
+ After copying your sensitive files into the encrypted volume, use a secure deletion program like [BleachBit](https://ssd.eff.org/en/module/how-delete-your-data-securely-windows) to delete the files from their original locations. Use the "wipe free space" option to remove any other data that may be residing your hard drive's free space (this may take some time to complete).
+ Alternatively, encrypt the entire drive. Depending on what device or volume you will store your sensitive data in, consider encrypting everything, not just the sensitive files. If you do this, keep in mind that it may be more obvious that you are hiding something.
+ If you want to hide your entire operating system, you can consider using [Tails](https://tails.boum.org/). This will create an operating system on a USB stick that you can use on any computer without leaving a trace when you remove it.

**Keep in mind**

+ The way USB drives and SD cards store data in solid state means they are very reliable but also makes wiping data off of them difficult. Sometimes the only safe way to destroy the data to avoid eventual recovery is to literally destroy the device.
+ Note that passphrase-protection of a directory or file is not encryption and is very easy to circumvent.
+ If the device containing the sensitive data is discovered and accessed, the immediate appearance of a full-disk decryption prompt may in and of itself reveal that you are hiding something. Sometimes it is best to use the hide-in-plain-sight tactic.
+ Remember, there is no way to recover encrypted data if you don't remember the encryption password, so use a password manager if needed ([see Kit #3]({{ site.baseurl }}/f06k03-passwords-safe)).

**Where to find more help**

+ Learn how to create hidden volumes with [VeraCrypt](https://securityinabox.org/en/guide/veracrypt/windows/).
+ Learn how to [encrypt your entire Windows system drive](https://www.howtogeek.com/howto/6169/use-truecrypt-to-secure-your-data/) with VeraCrypt.
+ Learn how to use [hash functions](https://www.howtogeek.com/67241/htg-explains-what-are-md5-sha-1-hashes-and-how-do-i-check-them/) to check whether your files have been tampered with.
