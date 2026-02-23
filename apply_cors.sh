#!/bin/bash
~/b2-env/bin/b2 bucket update --cors-rules "$(cat /tmp/cors.json)" Portfolio-Frodo-Baggins allPublic
