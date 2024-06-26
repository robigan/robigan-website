import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren, useMemo } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { IconType } from "react-icons/lib";
import Tile from "../Tile";

type ContactTileProps = {
    /**
     * Title string for the text below the icon
     */
    title: string,
    /**
     * Sets the a element to open the link in a new tab
     */
    blankTarget?: boolean,
    /**
     * Overwrite the visual aspects of blankTarget, such that if blankTarget is disabled, the visuals will still be enabled, useful for links that open up system prompts
     */
    overwriteBlankTargetVisuals?: boolean,
    /**
     * The path or URL to navigate to. It can also be an object. If it is undefined then it points to the absolute root path of the website.
     *
     * @example https://nextjs.org/docs/api-reference/next/link#with-url-object
     */
    href?: LinkProps["href"],
}

/**
 * ContactTile is a ready-to go component that utilizes all of the Tile.* and Tile components which can be used in 4x* flex grids
 */
const ContactTile: FC<PropsWithChildren<Omit<LinkProps, "href"> & ContactTileProps>> = ({ title, href, children, blankTarget = true, overwriteBlankTargetVisuals, ...linkProps }) => {
    const Icon: IconType = useMemo(() => {
        if (typeof overwriteBlankTargetVisuals === "undefined")
            return (blankTarget ? BiLinkExternal : BsArrowRightShort);
        else
            return (overwriteBlankTargetVisuals ? BiLinkExternal : BsArrowRightShort);
    }, [blankTarget, overwriteBlankTargetVisuals]);

    return (
        <Tile.OuterTile>

            <Link
                passHref={blankTarget}
                href={href ?? "/"}
                {...linkProps}
                target={blankTarget ? "_blank" : "_self"}
                rel={blankTarget ? "noopener noreferrer" : ""}
                tabIndex={0}>

                <Tile>
                    <Tile.InnerTile>
                        <Tile.InnerTileOverlay>
                            <Icon />
                        </Tile.InnerTileOverlay>
                        <Tile.InnerTileContent>
                            {children}
                        </Tile.InnerTileContent>
                    </Tile.InnerTile>
                    <Tile.TileCaption>{title}</Tile.TileCaption>
                </Tile>

            </Link>

        </Tile.OuterTile>
    );
};

export default ContactTile;