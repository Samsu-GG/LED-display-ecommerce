import pytest

from app.core.exceptions import ProductNotFoundError
from app.repositories.base import ProductRepository
from app.schemas.product import Product
from app.services.product_service import ProductService


class FakeRepo(ProductRepository):
    def __init__(self):
        self.items = [
            Product(id=1, product_name="A", picture="/a.jpg", summary="s", description="d", price=1, rating=4.0),
            Product(id=2, product_name="B", picture="/b.jpg", summary="s", description="d", price=2, rating=4.9),
        ]

    def get_all(self):
        return self.items

    def get_by_id(self, product_id):
        return next((p for p in self.items if p.id == product_id), None)


def test_featured_sorted_by_rating():
    assert ProductService(FakeRepo()).featured(1)[0].id == 2


def test_get_product_returns_item():
    assert ProductService(FakeRepo()).get_product(1).product_name == "A"


def test_missing_product_raises():
    with pytest.raises(ProductNotFoundError):
        ProductService(FakeRepo()).get_product(99)
