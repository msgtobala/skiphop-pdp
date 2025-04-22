import React from "react";
import { HeartIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const HeaderByAnima = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Baby Gear", isActive: true },
    { label: "Diaper Bags", isActive: false },
    { label: "Bath", isActive: false },
    { label: "Kids Bags", isActive: false },
    { label: "Mealtime", isActive: false },
    { label: "Playtime & Toys", isActive: false },
    { label: "Collections", isActive: false },
  ];

  return (
    <header className="flex flex-col w-full bg-white">
      {/* Main navigation bar */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-4 border-b">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src="https://s3-alpha-sig.figma.com/img/2abe/045e/fc98edd3d5eb777392ce8d4fb13a3fac?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gyh5FTan7ApyNwcCNy1FGBalgVxf5OxtptZNGEE-VVnQiYaZ~XI1lF4J5HY9V-3nfrx2GGH~KWRz3va6mkRTBlVxHXnkWv-iWPLjGShS9xsUEfq7L-0QcqFTQt2Q65rjD-qf8Kn-3Ki8U9FTyw-PlYsPtIiQPto8mNthz0T5Ubkv5yaLF2yOIvu3MvQ11TT8zH-GulpzJ-7wFF969qfV0nbJlx~LS7lf31N4BO5cIlw61fb6eTS~qhTvIxx8wfXwN5vJkwDbuHLnHgC3fvpdj5BDra-ytf0COYE4VqjOaklpxnWDe2CqxsYpxef7Npa99kV5iwljL1Fp0mhyzKbqKQ__"
            alt="Skip Hop"
            className="h-8 lg:h-12"
          />
        </div>

        {/* Navigation menu */}
        <NavigationMenu className="hidden lg:flex flex-1">
          <NavigationMenuList className="flex justify-center w-full">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index} className="flex-shrink-0">
                <NavigationMenuLink 
                  className={`relative px-2 xl:px-4 font-medium text-sm xl:text-base tracking-[-0.64px] leading-6 py-2 ${
                    item.isActive 
                      ? 'text-[#ed2d23] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#ed2d23]' 
                      : 'text-[#2e2e2e] hover:text-[#ed2d23]'
                  }`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Utility icons */}
        <div className="flex items-center gap-2 lg:gap-6 flex-shrink-0">
          <button className="p-1 lg:p-2 hover:text-[#ed2d23]">
            <SearchIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button className="p-1 lg:p-2 hover:text-[#ed2d23]">
            <UserIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button className="p-1 lg:p-2 hover:text-[#ed2d23]">
            <HeartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button className="p-1 lg:p-2 hover:text-[#ed2d23]">
            <ShoppingCartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};