import json
from pathlib import Path

from app.repositories.base import ProductRepository
from app.schemas.product import Product


class JsonProductRepository(ProductRepository):
    def __init__(self, file_path: Path):
        self._file = file_path

    def _load(self) -> list[Product]:
        with open(self._file, encoding="utf-8") as f:
            return [Product(**item) for item in json.load(f)]

    def get_all(self) -> list[Product]:
        return self._load()

    def get_by_id(self, product_id: int) -> Product | None:
        return next((p for p in self._load() if p.id == product_id), None)
