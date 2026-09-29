from fastapi import APIRouter, Depends, Query

from app.api.deps import get_product_service
from app.schemas.product import Product
from app.services.product_service import ProductService

router = APIRouter(prefix="/products", tags=["products"])


@router.get("", response_model=list[Product])
def list_products(service: ProductService = Depends(get_product_service)):
    return service.list_products()


# Declared before "/{product_id}" so "featured" is not parsed as an id.
@router.get("/featured", response_model=list[Product])
def featured_products(
    limit: int = Query(4, ge=1, le=20),
    service: ProductService = Depends(get_product_service),
):
    return service.featured(limit)


@router.get("/{product_id}", response_model=Product)
def get_product(product_id: int, service: ProductService = Depends(get_product_service)):
    return service.get_product(product_id)
