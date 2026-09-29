from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

from app.api.routes import health, products
from app.core.config import settings
from app.core.exceptions import ProductNotFoundError


def create_app() -> FastAPI:
    app = FastAPI(title=settings.app_name)

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.cors_origins,
        allow_methods=["GET"],
        allow_headers=["*"],
    )

    @app.exception_handler(ProductNotFoundError)
    async def product_not_found_handler(_: Request, exc: ProductNotFoundError):
        return JSONResponse(status_code=404, content={"detail": str(exc)})

    app.include_router(health.router)
    app.include_router(products.router, prefix="/api")
    app.mount("/static", StaticFiles(directory=settings.static_dir), name="static")
    return app


app = create_app()
