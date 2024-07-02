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
                                name: "Who Am I.txt",
                                type: NodeType.FILE,
                                contents: `(In Obi Wan Kenobi voice) Hello there.
I am robigan.
If you hadn't guessed by now, I am OBSESSED with software and computers. Yes, I am Italian, but also Australian.
This website is both a home and place to show my passion and skills. Everything from my GitHub profile to the fact that you're reading this through a simulated linux filesystem hierarchy (written in 100% typescript) has all been meticulously planned to present what I love. In other words, I love writing code and making websites. If you do have any experience with web development yourself, I would describe this passion of mine as both a mental issue and skill.

Enough about this website, and more about my past. I war born in the 2000s and have been on the internet ever since 2009, with the origins of the "robigan" handle being traceable back to the early days of the internet Flash era, circa 2012. The name "robigan" was what I had originally used for my pet monster on a website called moshimonsters. Which was a website where you'd have minigames and challenges to complete everyday, essentially another neopets/club penguin website (if you're old enough to know what those are).

Until circa 2014, I was a primarily Mac OS X user utilizing a second-hand 2005 Macbook, which ultimately gave up in 2014 and corrupted itself (I still vividly remember the day I got the disk not found error). At that point, I switched to being an iPad user, and between the years of 2014 and 2016 I avidly used the iPad. In 2016 I managed to get my hands on another second-hand notebook and spent loads of time on a website called scratch (scratch.mit.edu), this helped spark my passion for software development and my other IT-related passions.`
                            },
                        ],
                    },
                    {
                        name: "Downloads",
                        type: NodeType.DIR,
                        children: [
                            {
                                name: "Profile Picture.jpg",
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
en-US.UTF-8 UTF-8 # English
it-IT.UTF-8 UTF-8 # Italian
fr-FR.UTF-8 UTF-8 # French`
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

iHUEARYIAB0WIQTdly2VCJP+CzMIk6MGcQEO5YfImQUCZoQ9OgAKCRAGcQEO5YfI
mQV4AQCXsJ/v9BmUtDrkgaQxrJflWjhsyL/+wmNGXFF3x2M/9AD/YYmC8Z3r/8OB
9T4/UFcN45hyWz568F/tpC/UPQuDpQs=
=LoiD
-----END PGP SIGNATURE-----`
                            },
                            {
                                name: "Ethereum",
                                type: NodeType.FILE,
                                contents: `-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

Robigan's Ethereum Wallet: 0xb9B089388879F9e82125e7f5C6C73da574A0A6c1
-----BEGIN PGP SIGNATURE-----

iHUEARYIAB0WIQTdly2VCJP+CzMIk6MGcQEO5YfImQUCZoQ9vgAKCRAGcQEO5YfI
medSAQCY3zZB9OC577ki9mXVHLyEbMs2D5zolrnur05Tjkxr3AD/aQTRHhcSgrUs
ARkGSPcc/2+EkwNELsgF0zTjUWgbTAM=
=T5j/
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
Comment: 2482 E740 CEB6 94AF 0E24  B6AB 4643 CC01 3EC7 5214
Comment: robigan (Robigan's personal PGP key) <robigan@robigan.com>
Comment: This key was updated the 2024-07-02

mDMEZoKMxhYJKwYBBAHaRw8BAQdA23eC3qyQFZyrSK/Q5CpViRnaI+UUkvQKJZrA
k3vN++m0OnJvYmlnYW4gKFJvYmlnYW4ncyBwZXJzb25hbCBQR1Aga2V5KSA8cm9i
aWdhbkByb2JpZ2FuLmNvbT6IkwQTFgoAOxYhBCSC50DOtpSvDiS2q0ZDzAE+x1IU
BQJmgozGAhsBBQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAAAoJEEZDzAE+x1IU
sgkA/RLlE6JMnkkRbQQWxGeGmhJHmiXMdec3rUqsk2t9rJgYAP9n+IxmUGAI80ef
WPEJzc5Nc3T716TMFXuzIxHdxcREAoh1BBAWCgAdFiEEERRVsPcNgSTHGfyNZ5mq
qfsU/O4FAmaEMlUACgkQZ5mqqfsU/O4YAgEA0OYWQPoXmgPvFqPQLS0h1Yg4dw8O
echjqT+oDWatD7QBAPamUA6K6i9IojIkePcSY9JZj/AfGqzrJBErZZJPBU8CuDME
ZoKNahYJKwYBBAHaRw8BAQdAgiPADazSsogxQc975iVqns9o0PM7lDamZw2l4RJ4
jRmI9QQYFgoAJhYhBCSC50DOtpSvDiS2q0ZDzAE+x1IUBQJmgo1qAhsCBQkA7U4A
AIEJEEZDzAE+x1IUdiAEGRYKAB0WIQTdly2VCJP+CzMIk6MGcQEO5YfImQUCZoKN
agAKCRAGcQEO5YfImafkAQD1/zjxnbVRvhc5W6bAcTozzQ/b6CU1lCn2IbJ6LtMJ
HAD+NH8NIzJLEQXagKLD88VvyvOjaEpZxPge2MzK9uQsJgYMNAD9HXDduKqLzdw9
fsBb9g0s/ahcMLlrgyh1ExNzrlJvo/4BAL5r4rUcXXS6RSFEpOQSUpasT8Ell/GW
dt+vlA1r0ecFuDgEZoKWQhIKKwYBBAGXVQEFAQEHQBkS5i86McKsHofkn48f+fSn
eDAzZZ8uLjD2XxE4WWIOAwEIB4h+BBgWCgAmFiEEJILnQM62lK8OJLarRkPMAT7H
UhQFAmaClkICGwwFCQDtTgAACgkQRkPMAT7HUhSniwEAkPawbdmb351gbxpQkL6u
u404cr4DuLxp73UKm+X00PcA/1y50dGFLrkV2uVQx5pZiye2WzoDtYXm/yl+ofc9
YJcC
=e6Tr
-----END PGP PUBLIC KEY BLOCK-----
-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: 1114 55B0 F70D 8124 C719  FC8D 6799 AAA9 FB14 FCEE
Comment: This key is expiring soon, please use the updated key

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
Comment: This key was updated the 2024-07-02. Expiry date extended and new signatures added.

mDMEYy7jaRYJKwYBBAHaRw8BAQdAG6TP0/OqkNzxS7i0U3n/QogppZMiqEKVNDLN
pmXBgDu0dHJvYmlnYW4gKFVsdGltYXRlIFBHUCBrZXkgZm9yIEdpdEh1YiByZWxh
dGVkIGFjdGlvbnMgYWNyb3NzIGFsbCBkZXZpY2VzKSA8MzUyMTA4ODgrcm9iaWdh
bkB1c2Vycy5ub3JlcGx5LmdpdGh1Yi5jb20+iJkEExYKAEECGwMFCwkIBwICIgIG
FQoJCAsCBBYCAwECHgcCF4AWIQRfz8DxrCyNYxYsc/SxdrbBgfYA0QUCZoQrtQUJ
B4TOAAAKCRCxdrbBgfYA0ZKBAP9rqgzY7XOBbvplXm/6O6NM8qIc0pwUXHkIi/YB
mniEKgD+NqsKwWQJuc/VyqdTgCfHnWQPD7R+hiodfHoCOSnT5gCIdQQQFggAHRYh
BBEUVbD3DYEkxxn8jWeZqqn7FPzuBQJjMgyDAAoJEGeZqqn7FPzuX54A/Aq9jLu7
jTcMlhVfn4qeXhTkE+tCSCj7RirPoPArns+6AP9ckv7jmH0PABbstZm8pm7CkQLr
71bmrHRzTHJzM8CtA4h1BBAWCgAdFiEEJILnQM62lK8OJLarRkPMAT7HUhQFAmaE
OccACgkQRkPMAT7HUhQXjAD/Xzm0hyEsSbMQu4xslfULJ+fiGYGuJ6A2UiKM1zbf
t0AA/3cUfirzK05Mpvs1HKU9QAOy1Mc93OqO8TF01JxfuKYG
=Kllp
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
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Elite Dangerous",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Rocket League",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Outer Worlds",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Mindustry",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Forza Horizon 3",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Hitman",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Forza Horizon 5",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Subnautica",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Outer Wilds",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Minecraft Dungeons",
                                type: NodeType.FILE,
                                contents: "This is honestly such a great game, would recommend anyone to play in Couch co-op with their friends. Me and my roommate have had loads of fun every night.\n\n'Better than the original' -robigan, 2023"
                            },
                            {
                                name: "Fall Guys",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Crossout",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "No Man's Sky",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Sea of Thieves",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Astroneer",
                                type: NodeType.EMPTY_FILE,
                            },
                            {
                                name: "Roblox",
                                type: NodeType.FILE,
                                contents: "This platform has honestly become disgusting and terrifying. If you're reading this, please cease any interaction with this horrible company. See https://www.youtube.com/watch?v=_gXlauRB1EQ, https://www.youtube.com/watch?v=jQQpjjHXO1M, https://www.youtube.com/watch?v=CRH41vgIBuQ for more information."
                            },
                        ]
                    }
                ]
            }
        ]
    }
];