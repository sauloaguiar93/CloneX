"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    defaultValue?: string;
    hideOnSearch?: boolean;
}

export const SearchInput = ({ defaultValue,hideOnSearch }: Props) => {
    const router = useRouter();
    const pathName = usePathname();
    const [SearchInput, setSearchInput] = useState(defaultValue ?? '');
    const handleSearchEnter = () => {
        if(SearchInput) {
            router.push('/search?q='+encodeURIComponent(SearchInput));
        }
    }

    if(hideOnSearch && pathName === '/search') return null;

    return (
        <Input 
            placeholder="Buscar"
            icon={faMagnifyingGlass}
            filled
            value={SearchInput}
            onChange={t => setSearchInput(t)}
            onEnter={handleSearchEnter}
        />
    );
}