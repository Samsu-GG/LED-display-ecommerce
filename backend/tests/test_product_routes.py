from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health():
    assert client.get("/health").json() == {"status": "ok"}


def test_list_products():
    r = client.get("/api/products")
    assert r.status_code == 200
    assert len(r.json()) >= 1


def test_featured_limit():
    assert len(client.get("/api/products/featured?limit=2").json()) == 2


def test_detail_and_404():
    assert client.get("/api/products/1").status_code == 200
    assert client.get("/api/products/9999").status_code == 404
