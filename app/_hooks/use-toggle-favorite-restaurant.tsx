import { toast } from "sonner";
import { toggleFavoriteRestaurant } from "../__actions/restaurant";
import { useRouter } from "next/router";

interface useToggleFavoriteRestaurantProps {
  userId?: string;
  restaurantId: string;
  restaurantIsFavorited?: boolean;
}

const useToggleFavoriteRestaurant = ({
  userId,
  restaurantId,
  restaurantIsFavorited,
}: useToggleFavoriteRestaurantProps) => {
  const router = useRouter();

  const handleFavoriteClick = async () => {
    if (!userId) return;

    try {
      toggleFavoriteRestaurant(userId, restaurantId);

      toast(
        restaurantIsFavorited
          ? "Restaurante removido dos favoritos."
          : "Restaurante favoritado!",
        {
          action: {
            label: "Meus favoritos",
            onClick: () => router.push("/my-favorite-restaurants"),
          },
        },
      );
    } catch (error) {
      toast.error("Erro ao favoritar restaurante.");
    }
  };

  return { handleFavoriteClick };
};

export default useToggleFavoriteRestaurant;
