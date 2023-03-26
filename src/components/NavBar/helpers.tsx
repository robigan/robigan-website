import { ComponentProps, FC } from "react";
import NavBar from ".";

const NavBarMobileSpacer: FC = () => (
    <div className="hidden lg:block invisible mx-8">
        {/* Serves as an invisible element meant to make space on the x-axis */}
        <NavBar pathname="" />
    </div>
);

const NavBarMobile: FC<ComponentProps<typeof NavBar>> = ({ ...props }) => (
    <div className="lg:hidden mb-4 fixed bottom-4 left-1/2 -translate-x-1/2">
        <NavBar {...props} />
    </div>
);

const NavBarDesktop: FC<ComponentProps<typeof NavBar>> = ({ ...props }) => (
    <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-0 mx-8">
        {/* Note that a different NavBar element is placed elsewhere such that it takes up the right amount of space to allow this one to be visually place correctly on the x-axis, while using this one to place it visually correctly on the y-axis */}
        <NavBar {...props} />
    </div>
);

export { NavBarMobileSpacer, NavBarMobile, NavBarDesktop };