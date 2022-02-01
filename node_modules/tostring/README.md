tostring
========

Transform stdin strings from the command line

## install

```sh
$ npm install tostring -g
```

## usage

Reads from `stdin` and writes to `stdout` encoding data
into a specified type.

* type - Any type that [Buffer](http://nodejs.org/api/buffer.html) accepts

```sh
usage: tostring [-nhv] [type]

example:
  $ echo abc | tostring hex
```

**options:**

* `-n` - Do not print the trailing newline character.
* `-h` - Output help.
* `-v` - Output version.

## examples

**unicode:**

```sh
$ echo -n "\u00bd + \u00bc = \u00be" | to-s utf8
½ + ¼ = ¾
```

**hex:**

```sh
$ echo 123 | to-s hex
3132330a
```

**base64:**

```
$ echo -n oh my gah b64 me | to-s base64 -n
b2ggbXkgZ2FoIGI2NCBtZQ==
```

## license

MIT
