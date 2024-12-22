from fastapi import FastAPI
from redis import Redis

app = FastAPI()

redis = Redis(host="redis", port=6379)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}


@app.get("/redis/hits")
def read_redis():
    redis.incr("hits")
    return {"redis": redis.get("hits")}
