import { NodeType } from "../../components/FileSystemView/common";
import { RootDirectoryStructure } from "../../components/FileSystemView/directory";
import profilePicture from "../../../public/person.jpeg";

export const ABOUT_FSV_DATA: RootDirectoryStructure = [
    {
        name: "home",
        type: NodeType.DIR,
        children: [
            {
                name: "robigan",
                type: NodeType.DIR,
                children: [
                    {
                        name: "Documents",
                        type: NodeType.DIR,
                        children: [
                            {
                                name: "whoami.txt",
                                type: NodeType.FILE,
                                contents: `(In Obi Wan Kenobi voice) Hello there.
I am robigan.
If you hadn't guessed by now, I am OBSESSED with software and computers. Yes, I am Italian, but also Australian.
This website is both a home and place to show my passion and skills. Everything from my GitHub profile to the fact that you're reading this through a simulated linux filesystem hierarchy (written in 100% typescript) has all been meticulously planned to present what I love. In other words, I love writing code and making websites. If you do have any experience with web development yourself, I would describe this passion of mine as both a mental issue and skill.

Enough about this website, and more about my past. I am an '06 kiddo that's been on the internet ever since 2009, with the origins of the "robigan" handle being traceable back to the early days of the internet Flash era, circa 2012. The name "robigan" was what I had originally used for my pet monster on a website called moshimonsters. Which was a website where you'd have minigames and challenges to complete everyday, essentially another neopets/club penguin website (if you're old enough to know what those are).

Until circa 2014, I was a primarily Mac OS X user utilizing a second-hand 2005 Macbook, which ultimately gave up in 2014 and corruped itself (I still vividly remember the day I got the disk not found error). At that point my mother had introduced to the household the iPad, and between the years of 2014 and 2016 I was an avid iPad user. In 2016 I managed to get my hands on another second-hand notebook and I spent a good time of my days on a website called scratch (scratch.mit.edu), this helped spark my passion for software development and my other IT-related passions.`
                            },
                        ],
                    },
                    {
                        name: "Downloads",
                        type: NodeType.DIR,
                        children: [
                            {
                                name: "profile-picture.jpg",
                                type: NodeType.IMAGE,
                                contents: profilePicture
                            }
                        ]
                    },
                    // {
                    //     name: "goodbye-my-bestfriend.txt",
                    //     type: NodeType.FILE,
                    //     contents: "Today (at 2022-09-26T17:46:00Z) you died peacefully. I hope you have a great time in the after-life and that you'll forever remember me, and in turn I'll forever remember you. I hope you'll forgive me for not having spent your dying months closer together, but you were so frail that there was nothing I could really do. RIP my beloved friend."
                    // }
                ]
            }
        ]
    },
    {
        name: "etc",
        type: NodeType.DIR,
        children: [
            {
                name: "locales",
                type: NodeType.FILE,
                contents: `# This file describes all the languages used by the Operating System
English (US)
Italian (IT)
French  (FR)`
            }
        ]
    },
    {
        name: "dev",
        type: NodeType.DIR,
        children: [
            {
                name: "gps",
                type: NodeType.FILE,
                contents: "italy"
            }
        ]
    },
    {
        name: "media",
        type: NodeType.DIR,
        children: [
            {
                name: "robigan",
                type: NodeType.DIR,
                children: [
                    {
                        name: "Wallets",
                        type: NodeType.DIR,
                        children: [
                            {
                                name: "Bitcoin",
                                type: NodeType.FILE,
                                contents: `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

Robigan's Bitcoin Address: bc1qd5vxks668xywjg4w4ere495pycrxjp45wqdkuf
-----BEGIN PGP SIGNATURE-----

iHUEARYIAB0WIQQRFFWw9w2BJMcZ/I1nmaqp+xT87gUCYzICKwAKCRBnmaqp+xT8
7gPGAQCd/aeAwGARs48e6mgqDTxCGn94kx34OFsZI6SJz56lGAEA9slygHebmQSx
jToWvMz/fmO0YDZ57LUJFU1uoZ6HqwI=
=zeOj
-----END PGP SIGNATURE-----`
                            },
                            {
                                name: "Ethereum",
                                type: NodeType.FILE,
                                contents: `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

Robigan's Ethereum Wallet: 0xb9B089388879F9e82125e7f5C6C73da574A0A6c1
-----BEGIN PGP SIGNATURE-----

iHUEARYIAB0WIQQRFFWw9w2BJMcZ/I1nmaqp+xT87gUCYzIDmQAKCRBnmaqp+xT8
7tShAP9kEaRBnWm+BPWhfSxDWJBkORHmYbNTisgE2+EXE+8YKgD+Ic5xAuf6Rg4S
TsPenL9Ltx4QBoey0dyLMH833IwT7g4=
=UzJM
-----END PGP SIGNATURE-----`
                            }
                        ]
                    },
                    {
                        name: "Keys",
                        type: NodeType.DIR,
                        children: [
                            {
                                name: "General",
                                type: NodeType.FILE,
                                contents: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: 1114 55B0 F70D 8124 C719  FC8D 6799 AAA9 FB14 FCEE
Comment: robigan (Robigan's personal PGP key) <robigan@robigan.com>

xjMEYvzknxYJKwYBBAHaRw8BAQdAfhTOp6DmuXMS4mlnvcNtRooz+IzXmi960nZd
NiNwvtbNOnJvYmlnYW4gKFJvYmlnYW4ncyBwZXJzb25hbCBQR1Aga2V5KSA8cm9i
aWdhbkByb2JpZ2FuLmNvbT7CmQQTFgoAQRYhBBEUVbD3DYEkxxn8jWeZqqn7FPzu
BQJi/OSfAhsDBQkDwmcABQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAAAoJEGeZ
qqn7FPzu8i0BAKv/8OYRaImqWwsBs/vzdn5qUsmGf2VLgBtVD8Uz+2CKAQCn8MPz
FuFYDmYwJwJAwHxOmWt4LTkKGyo2d9jkEoq+B844BGL85J8SCisGAQQBl1UBBQEB
B0CYwkrGSq8GDkhPtS6DqAn0qCDpAKHaKmAmClG/bX9RWAMBCAfCfgQYFgoAJhYh
BBEUVbD3DYEkxxn8jWeZqqn7FPzuBQJi/OSfAhsMBQkDwmcAAAoJEGeZqqn7FPzu
KkoA/j+y+sBBUMi6Cn62L2plKSqYZ817ovc9bo5QETVa+rjtAQDeIxo0EmqgCtGP
6bOvcctjsRgJRtElX6Db/aQ/EOA/Bg==
=BEU5
-----END PGP PUBLIC KEY BLOCK-----`
                            },
                            {
                                name: "GitHub Code Signing",
                                type: NodeType.FILE,
                                contents: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: 5FCF C0F1 AC2C 8D63 162C  73F4 B176 B6C1 81F6 00D1
Comment: robigan (Ultimate PGP key for GitHub related actions across all devices) <35210888+robigan@users.noreply.github.com>

mDMEYy7jaRYJKwYBBAHaRw8BAQdAG6TP0/OqkNzxS7i0U3n/QogppZMiqEKVNDLN
pmXBgDu0dHJvYmlnYW4gKFVsdGltYXRlIFBHUCBrZXkgZm9yIEdpdEh1YiByZWxh
dGVkIGFjdGlvbnMgYWNyb3NzIGFsbCBkZXZpY2VzKSA8MzUyMTA4ODgrcm9iaWdh
bkB1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+iJkEExYKAEEWIQRfz8DxrCyNYxYs
c/SxdrbBgfYA0QUCYy7jaQIbAwUJA8JnAAULCQgHAgIiAgYVCgkICwIEFgIDAQIe
BwIXgAAKCRCxdrbBgfYA0bItAP49GUWLRCtm3RnzdmiVsE9Dj7IP1aG0xFuSr/f6
fB3LYgD/aG2ud6AGBgrnJULSZXit7RCcs1yb91lPIF9POGHmfwqIdQQQFggAHRYh
BBEUVbD3DYEkxxn8jWeZqqn7FPzuBQJjMgyDAAoJEGeZqqn7FPzuX54A/Aq9jLu7
jTcMlhVfn4qeXhTkE+tCSCj7RirPoPArns+6AP9ckv7jmH0PABbstZm8pm7CkQLr
71bmrHRzTHJzM8CtAw==
=ecXk
-----END PGP PUBLIC KEY BLOCK-----`
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "mnt",
        type: NodeType.DIR,
        children: [
            {
                name: "External",
                type: NodeType.DIR,
                children: [
                    {
                        name: "Games",
                        type: NodeType.DIR,
                        children: [
                            {
                                name: "Minecraft",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Elite Dangerous",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Rocket League",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Outer Worlds",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Mindustry",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Forza Horizon 3",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Hitman",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Forza Horizon 5",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Subnautica",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Outer Wilds",
                                type: NodeType.DIR,
                            },
                            {
                                name: "Roblox",
                                type: NodeType.DIR,
                                children: [
                                    {
                                        name: "Disclaimer.txt",
                                        type: NodeType.FILE,
                                        contents: "This platform has honestly become disgusting and terrifying. If you're reading this, please cease any interaction with this horrible company."
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
];