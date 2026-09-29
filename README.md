# EagerLED Clone

React (Vite) frontend + FastAPI backend. Products are stored in a JSON file behind a repository interface, so moving to Supabase later is a one-file change.

## Architecture (backend)

    Routes (app/api)  ->  Services (app/services)  ->  Repositories (app/repositories)  ->  data/products.json
                         schemas (app/schemas) define the API contract

## Run locally

Backend:

    cd backend
    python -m venv .venv && source .venv/bin/activate
    pip install -r requirements.txt
    cp .env.example .env
    uvicorn app.main:app --reload        # http://localhost:8000/docs

Frontend:

    cd frontend
    cp .env.example .env
    npm install
    npm run dev                          # http://localhost:5173

Tests: `cd backend && pytest`

Docker: `docker compose up --build` (site on http://localhost:8080)

## Adding products
Edit `backend/app/data/products.json` (fields: id, product_name, picture, summary, description, price, rating) and drop images into `backend/static/images/`.

## Switching to Supabase later
1. Add `app/repositories/product_supabase.py` implementing `ProductRepository`.
2. Change the return value in `app/api/deps.py::get_product_repository`.

## Before going live
Replace placeholder text in `frontend/src/data/siteContent.js`, product data, and images with real EagerLED content.
