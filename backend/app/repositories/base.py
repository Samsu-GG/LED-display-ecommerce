from abc import ABC, abstractmethod

from app.schemas.product import Product


class ProductRepository(ABC):
    """Contract the service layer depends on. Implement this for any storage backend."""

    @abstractmethod
    def get_all(self) -> list[Product]: ...

    @abstractmethod
    def get_by_id(self, product_id: int) -> Product | None: ...
