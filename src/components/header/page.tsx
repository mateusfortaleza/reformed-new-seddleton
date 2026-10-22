import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

export default function PageHeader() {
  return (
    <>
      <header className="h-87.5 w-full bg-[url('/images/Community-Page-Header(1).png')] bg-position-[center_55%] bg-cover bg-no-repeat flex justify-center items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="absolute w-157.75 h-37.5 flex flex-col justify-center text-center">
                <h1 className="font-[cinzel] font-[640] text-[#14A85B] text-[70px] w-full text-center leading-none text-shadow-[2px_4px_5px_rgba(0,0,0,0.25)]">New Seddleton</h1>
                <p className="font-[Georgia] text-[#D9D9D9] text-[30px] w-full text-center leading-none text-shadow-[2px_2px_3px_rgba(0,0,0,0.25)]">A Green Ember Community</p>
            </div>
      </header>
    </>
  );
}
