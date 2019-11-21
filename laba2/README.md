**[Лабораторная работа № 2 Знакомство с nginx](https://docs.google.com/document/d/18u8JGsIkC7PYVeV_yyAu-paE_hPNEIWg5Jp9HbyVcCk/edit)**

**Замерьте скорость отдачи контента на сервере из лабораторной работы №1. Добавьте логирование приходящих запросов.**

1. Отдача страниц

```
	Server Software:
	Server Hostname:        localhost
	Server Port:            3000

	Document Path:          /
	Document Length:        50 bytes

	Concurrency Level:      10
	Time taken for tests:   0.127 seconds
	Complete requests:      100
	Failed requests:        0
	Total transferred:      33600 bytes
	HTML transferred:       5000 bytes
	Requests per second:    789.52 [#/sec] (mean)
	Time per request:       12.666 [ms] (mean)
	Time per request:       1.267 [ms] (mean, across all concurrent requests)
	Transfer rate:          259.06 [Kbytes/sec] received

	Connection Times (ms)
				  min  mean[+/-sd] median   max
	Connect:        0    0   0.4      0       1
	Processing:     5   11   2.5     10      22
	Waiting:        5   10   2.2      9      18
	Total:          5   11   2.4     10      22

	Percentage of the requests served within a certain time (ms)
	  50%     10
	  66%     11
	  75%     13
	  80%     13
	  90%     14
	  95%     15
	  98%     16
	  99%     22
	 100%     22 (longest request)
```

```
	{"time":"2019-10-30T11:55:49.092Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:55:49.103Z","lvl":"INFO","msg":"Response with status 200 in 12 ms."}
	{"time":"2019-10-30T11:56:21.663Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.666Z","lvl":"INFO","msg":"Response with status 200 in 3 ms."}
	{"time":"2019-10-30T11:56:21.670Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.672Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.673Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.676Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.677Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.678Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.680Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.681Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.683Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.690Z","lvl":"INFO","msg":"Request from ::1: GET /"}
	{"time":"2019-10-30T11:56:21.692Z","lvl":"INFO","msg":"Response with status 200 in 22 ms."}
	{"time":"2019-10-30T11:56:21.694Z","lvl":"INFO","msg":"Response with status 200 in 22 ms."}
	{"time":"2019-10-30T11:56:21.696Z","lvl":"INFO","msg":"Response with status 200 in 23 ms."}
	{"time":"2019-10-30T11:56:21.698Z","lvl":"INFO","msg":"Response with status 200 in 21 ms."}
	{"time":"2019-10-30T11:56:21.699Z","lvl":"INFO","msg":"Response with status 200 in 21 ms."}
	{"time":"2019-10-30T11:56:21.700Z","lvl":"INFO","msg":"Response with status 200 in 24 ms."}
	{"time":"2019-10-30T11:56:21.701Z","lvl":"INFO","msg":"Response with status 200 in 21 ms."}
	...
```

2. Отдача картинки

```
	Server Hostname:        localhost
	Server Port:            3000

	Document Path:          /hack/
	Document Length:        74 bytes

	Concurrency Level:      10
	Time taken for tests:   0.416 seconds
	Complete requests:      100
	Failed requests:        0
	Total transferred:      36000 bytes
	HTML transferred:       7400 bytes
	Requests per second:    240.45 [#/sec] (mean)
	Time per request:       41.589 [ms] (mean)
	Time per request:       4.159 [ms] (mean, across all concurrent requests)
	Transfer rate:          84.53 [Kbytes/sec] received

	Connection Times (ms)
				  min  mean[+/-sd] median   max
	Connect:        0    0   0.4      0       1
	Processing:    24   38   8.0     38      63
	Waiting:       23   37   7.9     35      61
	Total:         24   39   8.0     38      63

	Percentage of the requests served within a certain time (ms)
	  50%     38
	  66%     39
	  75%     41
	  80%     44
	  90%     53
	  95%     58
	  98%     59
	  99%     63
	 100%     63 (longest request)
```

```
	{"time":"2019-10-30T12:09:15.758Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.771Z","lvl":"INFO","msg":"Response with status 200 in 14 ms."}
	{"time":"2019-10-30T12:09:15.778Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.779Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.780Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.783Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.784Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.787Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.788Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.789Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.790Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.791Z","lvl":"INFO","msg":"Request from ::1: GET /hack/"}
	{"time":"2019-10-30T12:09:15.794Z","lvl":"INFO","msg":"Response with status 200 in 16 ms."}
	{"time":"2019-10-30T12:09:15.803Z","lvl":"INFO","msg":"Response with status 200 in 20 ms."}
	{"time":"2019-10-30T12:09:15.804Z","lvl":"INFO","msg":"Response with status 200 in 25 ms."}
	{"time":"2019-10-30T12:09:15.806Z","lvl":"INFO","msg":"Response with status 200 in 26 ms."}
	{"time":"2019-10-30T12:09:15.808Z","lvl":"INFO","msg":"Response with status 200 in 24 ms."}
	{"time":"2019-10-30T12:09:15.809Z","lvl":"INFO","msg":"Response with status 200 in 21 ms."}
	{"time":"2019-10-30T12:09:15.810Z","lvl":"INFO","msg":"Response with status 200 in 21 ms."}
	{"time":"2019-10-30T12:09:15.811Z","lvl":"INFO","msg":"Response with status 200 in 24 ms."}
	{"time":"2019-10-30T12:09:15.813Z","lvl":"INFO","msg":"Response with status 200 in 23 ms."}
	{"time":"2019-10-30T12:09:15.815Z","lvl":"INFO","msg":"Response with status 200 in 24 ms."}
	...
```

3. Отдача запросов к api

```
	Server Software:
	Server Hostname:        localhost
	Server Port:            3000

	Document Path:          /respect
	Document Length:        146 bytes

	Concurrency Level:      10
	Time taken for tests:   0.356 seconds
	Complete requests:      100
	Failed requests:        0
	Non-2xx responses:      100
	Total transferred:      39000 bytes
	HTML transferred:       14600 bytes
	Requests per second:    280.83 [#/sec] (mean)
	Time per request:       35.609 [ms] (mean)
	Time per request:       3.561 [ms] (mean, across all concurrent requests)
	Transfer rate:          106.96 [Kbytes/sec] received

	Connection Times (ms)
				  min  mean[+/-sd] median   max
	Connect:        0    0   0.4      0       1
	Processing:    11   33   5.3     34      40
	Waiting:        9   27   5.7     27      39
	Total:         11   33   5.2     34      41

	Percentage of the requests served within a certain time (ms)
	  50%     34
	  66%     36
	  75%     37
	  80%     37
	  90%     38
	  95%     39
	  98%     40
	  99%     41
	 100%     41 (longest request)
```

```
	{"time":"2019-10-30T12:24:55.419Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.426Z","lvl":"INFO","msg":"Response with status 404 in 8 ms."}
	{"time":"2019-10-30T12:24:55.431Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.432Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.434Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.435Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.437Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.439Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.440Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.441Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.442Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.443Z","lvl":"INFO","msg":"Request from ::1: GET /respect"}
	{"time":"2019-10-30T12:24:55.445Z","lvl":"INFO","msg":"Response with status 404 in 14 ms."}
	{"time":"2019-10-30T12:24:55.446Z","lvl":"INFO","msg":"Response with status 404 in 14 ms."}
	{"time":"2019-10-30T12:24:55.447Z","lvl":"INFO","msg":"Response with status 404 in 13 ms."}
	{"time":"2019-10-30T12:24:55.448Z","lvl":"INFO","msg":"Response with status 404 in 13 ms."}
	{"time":"2019-10-30T12:24:55.450Z","lvl":"INFO","msg":"Response with status 404 in 13 ms."}
	{"time":"2019-10-30T12:24:55.457Z","lvl":"INFO","msg":"Response with status 404 in 18 ms."}
	{"time":"2019-10-30T12:24:55.458Z","lvl":"INFO","msg":"Response with status 404 in 18 ms."}
	{"time":"2019-10-30T12:24:55.460Z","lvl":"INFO","msg":"Response with status 404 in 19 ms."}
	{"time":"2019-10-30T12:24:55.461Z","lvl":"INFO","msg":"Response with status 404 in 19 ms."}
	{"time":"2019-10-30T12:24:55.463Z","lvl":"INFO","msg":"Response with status 404 in 20 ms."}
	...
```

4. Nginx отдачи статического контента.

```
	Server Software:        nginx/1.17.5
	Server Hostname:        127.0.0.1
	Server Port:            80

	Document Path:          /
	Document Length:        74 bytes

	Concurrency Level:      10
	Time taken for tests:   0.039 seconds
	Complete requests:      100
	Failed requests:        0
	Total transferred:      30500 bytes
	HTML transferred:       7400 bytes
	Requests per second:    2572.81 [#/sec] (mean)
	Time per request:       3.887 [ms] (mean)
	Time per request:       0.389 [ms] (mean, across all concurrent requests)
	Transfer rate:          766.32 [Kbytes/sec] received

	Connection Times (ms)
				  min  mean[+/-sd] median   max
	Connect:        0    0   0.4      0       1
	Processing:     1    3   0.8      3       5
	Waiting:        0    3   0.8      3       5
	Total:          1    3   0.8      4       5
	WARNING: The median and mean for the total time are not within a normal deviation
			These results are probably not that reliable.

	Percentage of the requests served within a certain time (ms)
	  50%      4
	  66%      4
	  75%      4
	  80%      4
	  90%      4
	  95%      5
	  98%      5
	  99%      5
	 100%      5 (longest request)
	...
```

5. Кеширование и gzip сжатие файлов.

```
	Server Software:        nginx/1.17.5
	Server Hostname:        127.0.0.1
	Server Port:            81

	Document Path:          /
	Document Length:        50 bytes

	Concurrency Level:      10
	Time taken for tests:   0.337 seconds
	Complete requests:      100
	Failed requests:        0
	Total transferred:      35800 bytes
	HTML transferred:       5000 bytes
	Requests per second:    296.34 [#/sec] (mean)
	Time per request:       33.745 [ms] (mean)
	Time per request:       3.374 [ms] (mean, across all concurrent requests)
	Transfer rate:          103.60 [Kbytes/sec] received

	Connection Times (ms)
				  min  mean[+/-sd] median   max
	Connect:        0    0   0.4      0       1
	Processing:    15   30   6.1     30      46
	Waiting:       14   30   6.2     30      46
	Total:         15   30   6.1     30      47

	Percentage of the requests served within a certain time (ms)
	  50%     30
	  66%     33
	  75%     34
	  80%     35
	  90%     39
	  95%     42
	  98%     46
	  99%     47
	 100%     47 (longest request)
```


