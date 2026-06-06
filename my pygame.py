import time
from itertools import cycle
lights = {
    ("Green", 2),
    ("Yellow", 1),
    ("Red", 2)
}
colors = cycle(lights)
while True:
    c.s = next(colors)
    print(c)
    time.sleep(s)