---
layout: post
title:  "My blog or website has been hacked or attacked"
ref: f09k06
lang: English
description: "Kit #6. My blog or website has been hacked or attacked"
code: f-09
icon: icon_f09k06.png
top: top-6-5
left: "left-4-5 wide"
---

##### I went online today and discovered that our website is no longer accessible! How can I get our site back up and protect it from future attacks?

*Your organisation’s website has undergone vandalism or is not accessible anymore, or you are simply worried that because of an upcoming campaign or action, your site will be a target of reactionary forces, either state-sponsored or amateur. You need to get back or keep control over your blog or website and its information.*

**What you should do**

You might need to reach out to your website developer or a technical expert if you’re unsure why your website is inaccessible. You could start by opening a support ticket with your hosting provider or sending an email to someone at an organisation like APC who can help determine exactly what has happened. If you’re concerned your site is being censored, use a web proxy or service like GreatFire (if censored in China) to verify where your site is (in)accessible (Read [Kit #12]({{ site.baseurl }}/f05k12-blocked-website )). Once you figure out the problem, you can act.

+ If your site was vandalised, it’s likely because someone gained access as a privileged user through a weakness in your site’s security. You should:
 1. Log in and revoke access from untrusted users.
 2. If your log-in doesn’t work and your site is hosted with a third-party service, read [Kit #1. My email, Facebook or Twitter account was hijacked]({{ site.baseurl }}/f08k01-accounts-hijacked), and follow similar steps to try to regain access to your site’s administration interface.
 3. If your log-in doesn’t work and you host your own site, you should be able to regain access at the database/server level, depending on your site’s platform. Because each platform and server set-up are so specific, you may need to turn to a technologist or support person at your web host for help.
 4. Restore the site with a recent backup.
 5. Without a backup or tracked content revision of any kind, you may face data loss.
+ If your site was taken offline by your provider, it may be because of government or other legal requests. Often your provider will notify you. You should:
 1. Comply with the content take-down request so that your full site can be restored.
 2. Appeal to your provider, explaining the political context of your work and asking them to restore your site. Challenge the request’s legality (it’s surprising how often these requests are illegitimate). You could employ the help of a lawyer.
 3. Move your site to a provider who is better aligned with the politics of your organisation and won’t comply with such requests. If you don’t already have access to a recent backup of the site files and database, you might have to go back to your existing provider and request a copy.
+ If your domain name was hijacked through a hack or because your ownership lapsed, you should immediately begin an appeal process with the domain registrar to restore your access. These appeals can be followed through all the way up to domain-name governance according to ICANN’s dispute resolution policies.
+ If your site is under DDoS attack you should reach out to your provider, who has likely already taken steps to mitigate the enormous amount of traffic coming to your site. Your provider can give you details of the attack that can help you and a technologist determine the best course of action. If waiting for the attack to subside is not an option, you should:
 1. Move your site or upload the most recent backup to a new server.
 2. Change the DNS TTL ("time to live") setting to something short so that when you move the website, zone record changes propagate fast.
 3. Get help putting the restored site behind DDoS protection such as Varnish (software) or [Deflect](https://deflect.ca/){:target="_blank"}.
+ If your site is being censored there may be no quick fix to restore access by users who are behind the filter or firewall. You should take some or all of these courses of action:

 1. Set up mirrors. Mirroring a website means having copies of your website on different servers. Mirrors require some set-up and are usually precautionary measures in cases such as technical problems, censorship or targeted hacking.
 2. Raise awareness about the censorship. Use social media to alert your users and freedom of expression activists to the site’s censorship and give them a new URL with which they can still access the site.
 3. Engage in campaigning and policy advocacy to lift the censorship.
 4. Educate your users about circumventing censorship. [Kit #12. I need to access a blocked website anonymously.]({{ site.baseurl }}/f05k12-blocked-website/)

+ You or a technical expert needs to inspect the server log files to see what has happened, otherwise the adversary may have uploaded and hidden a malicious "shell" file on your website, dumped your database, or created a system user on your server. Simply recovering the website is not enough if the server has been compromised.

**How to prevent future problems**

+ Backup the site files and database. Frequent backup is an essential practice. If you are running a blog on a third-party platform such as WordPress or Blogspot (Blogger) you can export the whole blog to your computer any time. Do this monthly, at a minimum.
+ If you host your own site, look to your web host to provide you with redundancy and backup options. How do they backup your site in case their infrastructure fails? How do you gain access to these backups? Does access to an automatic backup feature add extra cost to your monthly or yearly subscription?
+ Secure the website’s platform. If you are hosting your own website, you need to ensure that your website’s code is always up to date with the latest security releases. Once security vulnerabilities are known and updates are released for them, hackers also learn about these vulnerabilities and can exploit them to gain access to your website.
+ Secure your server. If you are hosting your own website on a server, it is important to spend some time reading the security features and policies of the hosting company, especially when it comes to take-down requests and data storage policies. There are several APC member organisations that take a political approach to providing technical services to activists, including Colnodo (Colombia), GreenNet (UK), Jinbonet (South Korea), May First (USA), and Pangea (Spain).
+ Protect your DNS. Domain registrars are commercial providers who, depending on their commitment to user privacy and data control, can be a weak point in your infrastructure. The government or another adversary could freeze your DNS. Or your control of your domain name could be a target for hackers. Make sure to use a trusted registrar like EasyDNS, keep your account secure and always renew on time.
+ Secure traffic to the site. It is extremely important to enable HTTPS access to your site, at least for when you log in to the site as an administrator, but also for your users’ privacy. TSL is an encryption protocol that establishes a secure channel between your computer and the server hosting your email or the website you’re visiting. The secure channel requires you to validate the site’s trustworthiness with a TSL certificate that you purchase from a certificate authority. [Let's Encrypt](https://letsencrypt.org/) is a service that issues free certificates and makes the process extremely easy if you have root access to your server. A list of web hosting providers who provide support for Let's Encrypt certificates can be found [here](https://community.letsencrypt.org/t/web-hosting-who-support-lets-encrypt/6920).
+ Secure log-ins. Enable two-step verification for administrator or user access to your site. Configure the site to keep logs and monitor them for unusual activity by user accounts. Delete, ban or block user accounts and IP addresses that you don’t trust.
+ Enable log-in recovery. Set up all recovery options for yourself such as a secondary email address. As opposed to a corporate blogging platform, if you are hosting your own website then you will have more options such as adding a mobile number, recovery questions or a special PIN code.
+ Prevent DDoS attacks. The best way to ensure a DDoS attack doesn’t keep your website and potentially your other web services like email from going dark, is prevention. Deflect is a free/libre and open source software tool and gratis service for progressive groups and organisations. You can sign up easily and at no cost, while maintaining control and access to your web stats.

**Where to find more help**

+ [Export your WordPress site](https://en.support.wordpress.com/export/){:target="_blank"}.
+ [Export your Blogspot site](https://support.google.com/blogger/answer/97416?hl=en){:target="_blank"}.
+ Get a free TSL certificate and learn about TSL from the project [Let’s Encrypt!](https://letsencrypt.org/){:target="_blank"}.
+ Learn about DDoS protection with [Deflect](https://deflect.ca/){:target="_blank"}.
