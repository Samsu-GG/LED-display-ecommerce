class ProductNotFoundError(Exception):
    def __init__(self, product_id: int):
        super().__init__(f"Product {product_id} not found")
        self.product_id = product_id
