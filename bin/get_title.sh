cat - | grep "<title" | perl -pe 's{.*title>(.*?)</title.*}{$1}g'