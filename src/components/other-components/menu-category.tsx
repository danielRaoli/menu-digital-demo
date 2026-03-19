"use client";

import { Drumstick, Loader2 } from "lucide-react";
import iconPizza from "../../app/assets/icon-pizza.svg";
import iconMassa from "../../app/assets/icon-massas.svg";
import iconPratos from "../../app/assets/icon-pratos.svg";
import iconSobremesa from "../../app/assets/icon-sobremesa.svg";
import iconDrinks from "../../app/assets/icon-drink.svg";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, useEffect, useState, useTransition } from "react";

type CategoryItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const categories: CategoryItem[] = [
  {
    label: "Entradas",
    href: "/entradas",
    icon: <Drumstick className="size-5" />,
  },
  {
    label: "Pizzas",
    href: "/pizzas",
    icon: <Image src={iconPizza} alt="Ícone pizza" width={24} />,
  },
  {
    label: "Massas",
    href: "/massas",
    icon: <Image src={iconMassa} alt="Ícone massas" width={24} />,
  },
  {
    label: "Pratos",
    href: "/pratos",
    icon: <Image src={iconPratos} alt="Ícone pratos" width={24} />,
  },
  {
    label: "Sobremesas",
    href: "/sobremesas",
    icon: <Image src={iconSobremesa} alt="Ícone sobremesa" width={24} />,
  },
  {
    label: "Bebidas",
    href: "/bebidas",
    icon: <Image src={iconDrinks} alt="Ícone bebidas" width={24} />,
  },
];

const MenuCategories = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [pendingPath, setPendingPath] = useState<string | null>(null);

  useEffect(() => {
    if (pendingPath === pathname) {
      setPendingPath(null);
    }
  }, [pathname, pendingPath]);

  const handleNavigate = (href: string) => {
    if (href === pathname) return;

    setPendingPath(href);
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <aside className="bg-black w-[100px] fixed h-full left-0 top-20">
      <div>
        <p className="text-base text-center text-white pt-2">Categorias</p>
        <div className="pt-5">
          {categories.map((category) => {
            const isActive = pathname === category.href;
            const isCurrentLoading = pendingPath === category.href && isPending;

            return (
              <div key={category.href} className="border-b-2 first:border-t-2">
                <button
                  type="button"
                  onClick={() => handleNavigate(category.href)}
                  disabled={isCurrentLoading}
                  className={`flex flex-col items-center justify-center text-white h-[75px] w-full rounded-none transition-all ${
                    isActive
                      ? "bg-primary/95"
                      : "bg-orange-400 hover:bg-primary/90"
                  } ${isCurrentLoading ? "opacity-80 cursor-wait" : "cursor-pointer"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isCurrentLoading ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : (
                    category.icon
                  )}
                  <span className="text-xs mt-1">{category.label}</span>
                </button>
              </div>
            );
          })}
        </div>

        {isPending && (
          <div className="absolute left-0 top-0 h-1 w-full overflow-hidden bg-white/10">
            <div className="h-full w-1/2 bg-orange-300 animate-[pulse_800ms_ease-in-out_infinite]" />
          </div>
        )}
      </div>
    </aside>
  );
};

export default MenuCategories;
