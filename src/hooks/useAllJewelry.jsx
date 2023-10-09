import { useQuery } from "@tanstack/react-query";

const useAllJewelry = () => {
    const {
        refetch,
        data: allJewelry = [],
        isLoading: loading,
    } = useQuery({
        queryKey: ["allJewelry"],
        queryFn: async () => {
            const res = await fetch(
                "https://sparkle-gems-server-jnaiufrlc-sohel0raza.vercel.app/allJewelry"
            );
            return res.json();
        },
    });
    return [allJewelry, loading, refetch];
};

export default useAllJewelry;