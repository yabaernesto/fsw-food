import { useContext } from "react";
import { CartContext } from "../__context/cart";
import CartIrem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { formatCurrency } from "../_helpers/price";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const Cart = () => {
  const { products, subtotalPrice, totalPrice, totalDiscounts } =
    useContext(CartContext);

  return (
    <div className="py-5">
      <div className="space-y-2">
        {products.map((product) => (
          <CartIrem key={product.id} cartProduct={product} />
        ))}
      </div>

      {/* CARD TOTAL */}
      <div className="mt-6">
        <Card>
          <CardContent className="space-y-2 p-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatCurrency(subtotalPrice)}</span>
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Descontos</span>
              <span>- {formatCurrency(totalDiscounts)}</span>
            </div>

            <Separator className="h-[0.5px]" />

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Entrega</span>
              {Number(products[0].restaurant.deliveryFee) === 0 ? (
                <span className="uppercase text-primary">Gratis</span>
              ) : (
                formatCurrency(Number(products[0].restaurant.deliveryFee))
              )}
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xs font-semibold">
              <span>Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="mt-6 w-full">Finalizar pedido</Button>
    </div>
  );
};

export default Cart;
