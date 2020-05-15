curl "https://tic-tac-toe-wdi-production.herokuapp.com/games/" \
--include \
--request GET \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-type: application/json" \
--data '{
  }'

echo
