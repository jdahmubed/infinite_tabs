echo "$1"

docker run --rm --cap-add=SYS_ADMIN --entrypoint=/usr/bin/google-chrome-unstable yukinying/chrome-headless-browser --headless --disable-gpu --dump-dom "$1"