from pydantic import BaseModel, Field


class Product(BaseModel):
    id: int
    product_name: str
    picture: str
    summary: str
    description: str
    price: float = Field(ge=0)
    rating: float = Field(ge=0, le=5)
    use_as_feature: bool = False
