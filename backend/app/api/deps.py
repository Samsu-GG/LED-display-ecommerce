from functools import lru_cache

from fastapi import Depends

from app.core.config import settings
from app.repositories.base import ProductRepository
from app.repositories.product_json import JsonProductRepository
from app.services.product_service import ProductService


@lru_cache
def get_product_repository() -> ProductRepository:
    # Swap this line for a Supabase repository later.
    return JsonProductRepository(settings.products_file)


def get_product_service(
    repo: ProductRepository = Depends(get_product_repository),
) -> ProductService:
    return ProductService(repo)
