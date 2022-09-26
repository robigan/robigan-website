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
                                contents: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium consequatur reiciendis aut nisi perferendis aliquam architecto. Itaque placeat voluptatum dignissimos sapiente odio eius inventore distinctio esse magnam voluptatibus, nam laboriosam."
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
                    }
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
French &nbsp;(FR)`
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
&nbsp;
Robigan&apos;s Bitcoin Address: bc1qd5vxks668xywjg4w4ere495pycrxjp45wqdkuf
-----BEGIN PGP SIGNATURE-----
&nbsp;
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
&nbsp;
Robigan&apos;s Ethereum Wallet: 0xb9B089388879F9e82125e7f5C6C73da574A0A6c1
-----BEGIN PGP SIGNATURE-----
&nbsp;
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
                            }
                        ]
                    }
                ]
            }
        ]
    }
];