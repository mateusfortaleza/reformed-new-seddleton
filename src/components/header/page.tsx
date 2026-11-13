import localFont from "next/font/local";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

const chocolateClassicalSans = localFont({
  src: "../../../public/fonts/ChocolateClassicalSans-Regular.ttf",
});

export default function PageHeader() {
  return (
    <>
      <NavigationMenu align="center" className={`${chocolateClassicalSans.className} absolute left-1/2 w-[1500px] max-w-none -translate-x-1/2`}>
        <NavigationMenuList className="relative gap-[120px] flex-nowrap">
          <NavigationMenuItem>
            <NavigationMenuLink className="text-[20px] text-[#F0F0F0] tracking-normal hover:bg-transparent data-[active=true]:hover:bg-transparent" render={<p>The Citadel of Dreams</p>} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-[20px] text-[#F0F0F0] tracking-normal hover:bg-transparent data-[active=true]:hover:bg-transparent" render={<p>Hallway Round 3.0</p>} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="text-[20px] text-[#F0F0F0] tracking-normal hover:bg-transparent data-[active=true]:hover:bg-transparent" render={<p>Lighthall</p>} />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-[20px] text-[#F0F0F0] tracking-normal hover:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent">More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col">
                <li>
                  <NavigationMenuLink className="text-[20px] text-popover-foreground tracking-normal hover:bg-transparent data-[active=true]:hover:bg-transparent" render={<p>Our Menders</p>} />
                </li>
                <li>
                  <NavigationMenuLink className="text-[20px] text-popover-foreground tracking-normal hover:bg-transparent data-[active=true]:hover:bg-transparent" render={<p>The Jupiter Awards</p>} />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <header className="h-87.5 w-full bg-[url('/images/Community-Page-Header(1).png')] bg-position-[center_55%] bg-cover bg-no-repeat flex justify-center items-center">
            <div className="absolute w-157.75 h-37.5 flex flex-col justify-center text-center">
                <h1 className="font-[cinzel] font-[640] text-[#14A85B] text-[70px] w-full text-center leading-none text-shadow-[2px_4px_5px_rgba(0,0,0,0.25)]">New Seddleton</h1>
                <p className="font-[Georgia] text-[#D9D9D9] text-[30px] w-full text-center leading-none text-shadow-[2px_2px_3px_rgba(0,0,0,0.25)]">A Green Ember Community</p>
            </div>
      </header>
    </>
  );
}
