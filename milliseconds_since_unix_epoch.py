# /**
#  * file: milliseconds_since_unix_epoch.py
#  * type: Python
#  * date: 21_SEPTEMBER_2024
#  * author: karbytes
#  * license: PUBLIC_DOMAIN
#  */

import time

# Get the current time in seconds since the Unix Epoch
current_time_seconds = time.time()

# Convert to milliseconds by multiplying by 1000 and casting to an integer
milliseconds_since_epoch = int(current_time_seconds * 1000)

# Open (or create if it doesn't exist) the file x.txt and write the milliseconds
with open("x.txt", "w") as file:
    file.write(str(milliseconds_since_epoch))

print(f"Milliseconds since Unix Epoch: {milliseconds_since_epoch} has been written to x.txt.")
