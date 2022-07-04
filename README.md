# otel-lambda-demo
Open Telemetry Lambda Demo

This example will deploy a Lambda service along with a Lambda layer for instrumenting OpenTelemetry and sending traces to XRay.

The instrumentation is able to trace calls to other services invoked via http calls without direct instrumentation of the code.

## Usage

### AWS X-Ray

* Install serverless framework

```sh
npm install -g serverless
```

* Create a AWS key and secret with permission to deploy Lambda services through Serverless framework and configure it

```sh
serverless config credentials --provider aws --key [aws_key] --secret [aws_secret]
```

* Deploy the service

```sh
cd service
sls deploy
```

* Get the url returned after service deploy and call it with `curl -v http://[url]`

  * If you want to create more samples, call it with `ab -n 10 -c 5 [url]`

* Open AWS Console -> X-Ray -> Service Map

* See the nodes and called services outside Lambda (e.g: randomuser.me)


