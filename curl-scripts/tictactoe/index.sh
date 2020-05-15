curl "https://tic-tac-toe-wdi-production.herokuapp.com/games/" \
--include \
--request GET \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-type: application/json" \
--data '{
    "game": {
      "id": "'"${ID}"'",
      "cells": "'"${DIRECTOR}"'",
      "over": "'"${OVER}"'",
      "player_x": {
        "id": "'"${PLAYERID}"'",
        "email": "'"${EMAIL}"'"
      }
    }
  }'

echo
