---
layout: post
title:  "I need to access a blocked website anonymously"
ref: f05k12
lang: English
description: "Kit #12. I need to access a blocked website anonymously"
code: f-05
icon: icon_f05k12.png
top: top-2-5
left: left-10
---

##### I need to check out a website that is blocked or whose content is not legal in my country. Is there a way to do this without drawing attention to myself?

*You live in a country that censors certain websites and online services, preventing you from reading them when you type their URL into your browser. In other cases, websites are accessible but their content is illegal where you live. You might face fines or imprisonment if you were found to have accessed these websites or downloaded particular content. Or you simply want to visit a website without leaving a trace or allowing others “watching” the traffic to know.*

**What you should do**

There are three options to access content that is censored, unavailable in your location or simply taboo. They differ in terms of the security and anonymity they provide to you, but also in terms of ease of use.

+ The first is to use a virtual private network (VPN). VPNs enable a properly configured device to send and receive all data through another computer network. For example, if you are using a VPN to access [https://apc.org](https://apc.org){:target="_blank"}, your computer first connects to the VPN, which then connects to [https://apc.org](https://apc.org){:target="_blank"} on your behalf and sends back the result. Someone who is monitoring your computer's network traffic will only see that you are communicating with the VPN rather than with the APC website. [Riseup](https://riseup.net/en/vpn) and [Psiphon](https://psiphon.ca/) are two free VPN services that you can consider using.

+ With an onion routing network such as Tor, your traffic is bounced through at least three other anonymising nodes or points to your requested destination and back. This means that even the operators of the nodes will not be able to see which website you are viewing. The [Tor Browser](https://securityinabox.org/en/guide/torbrowser/windows) is an easy application to download and install and requires little to no configuration. Even while using Tor, is important to use HTTPS (especially when entering passwords), to prevent a node from viewing the *content* of your communication. The extra additional anonymity of Tor comes at the cost of a reduction in the speed of your connection.

+ A web proxy is perhaps the easiest and quickest -- but least secure --  tool to access to a blocked website. Similar to a VPN, you simply navigate to a proxy website and type in the URL that you wish to access. The proxy (an intermediary server) fetches the site for you and returns it, often with ads and other unwanted code embedded. You should only consider using a web proxy to access a public website that may be blocked in your country, and you should certainly not use it to enter any passwords or access private data.

**Keep in mind**

+ Although your traffic is secured between you and the VPN, the VPN provider must be trusted because they can see, store and disclose the details of your traffic.

+ While Tor provides anonymity, it does not secure the content of your communications from eventual eavesdroppers.

+ Do not trust a VPN or the Tor network with your communications. Always use HTTPS when browsing and OpenPGP encryption when sending emails while connected to a VPN or Tor. If you can’t use HTTPS to visit some sensitive websites or don’t have OpenPGP encryption set up for your email client, then you shouldn’t use Tor or an untrusted VPN, period.

+ Whatever precautions you take to anonymously browse blocked or illegal content, your browser is configured by default to remember your browsing history. So in the case that your computer is seized or hacked, the intruder can easily check which websites you’ve visited. If this is a concern for you, configure your browser in such way that it doesn’t record browsing history.

**Where to find more help**

+ [Learn about how to bypass censorship](https://securityinabox.org/en/guide/anonymity-and-circumvention/){:target="_blank"}.
+ [Learn about extending your Firefox browser security](http://write.flossmanuals.net/basic-internet-security/extending-firefox/){:target="_blank"}.
+ [Learn about Tor](https://securityinabox.org/en/guide/torbrowser/windows/){:target="_blank"}.
+ [See an interactive illustration of how HTTPS and Tor make you both secure and anonymous](https://www.eff.org/pages/tor-and-https){:target="_blank"}.
+ Learn about [Riseup VPN](https://help.riseup.net/en/vpn){:target="_blank"}, [Psiphon](https://psiphon.ca/){:target="_blank"} and [TunnelBear VPN](https://help.tunnelbear.com/customer/portal/topics/620889-getting-started/articles){:target="_blank"}.
+ [Disable browsing history in Mozilla Firefox](https://support.mozilla.org/t5/Manage-preferences-and-add-ons/Settings-for-privacy-browsing-history-and-do-not-track/ta-p/1276#w_never-remember-history){:target="_blank"}.
+ [Temporarily disable browsing history in Chrome](https://support.google.com/websearch/answer/4540094){:target="_blank"}.
