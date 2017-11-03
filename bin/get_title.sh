echo "$1" | grep --line-buffered "<title" | tee -a insideGetTitle.tmp | perl -pe 's{.*(title.*?>.*?</title>).*}{$1}g'

#cat -  | tee body.tmp | grep --line-buffered "<title" | tee titlewithtag.tmp | gstdbuf -i0 -o0 -e0 perl -pe 's{.*title.*?>(.*?)</title.*}{$1}g' | tee afterPerlRegex.tmp