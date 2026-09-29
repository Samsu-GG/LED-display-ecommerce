from app.core.exceptions import ProductNotFoundError
from app.repositories.base import ProductRepository
from app.schemas.product import Product


class ProductService:
    def __init__(self, repo: ProductRepository):
        self._repo = repo

    def list_products(self) -> list[Product]:
        return self._repo.get_all()

    def get_product(self, product_id: int) -> Product:
        product = self._repo.get_by_id(product_id)
        if product is None:
            raise ProductNotFoundError(product_id)
        return product

    def featured(self, limit: int = 4) -> list[Product]:
        featured = [p for p in self._repo.get_all() if p.use_as_feature]
        featured.sort(key=lambda p: p.rating, reverse=True)
        return featured[:limit]
