# npm-packages-test
Test repo for publishing npm packages


```
{
   "name": "npm-packages-test",
   "version": "1.0.2",
   "description": "Test repo for publishing npm packages",
   "main": "dist/index.js",     
   "types": "dist/index.js",    
   "scripts": {
       ///  Testing in typescript with mocha and chai, ts-node to 
      "test": "mocha --require ts-node/register tests/**/*.ts",
      /// Typescript
      "build": "tsc",
      //run build before publish
      "prepare": "npm run build",
      //run test before publish
      "prepublishOnly": "npm test",
      "preversion": "npm run lint",
      "version": "npm run format && git add -A src"
   },
   "repository": {
      "type": "git",
      "url": "git+https://github.com/dans910/npm-packages-test.git"
   },
   "author": "",
   "license": "ISC",
   "bugs": {
      "url": "https://github.com/dans910/npm-packages-test/issues"
   },
   "homepage": "https://github.com/dans910/npm-packages-test#readme",
   "devDependencies": {
      "@types/chai": "^4.1.7",
      "@types/mocha": "^5.2.5",
      "chai": "^4.2.0",
      "mocha": "^5.2.0",
      "ts-node": "^7.0.1",
      "typescript": "^3.2.2"
   },
   "dependencies": {},
   /// files to publish to npm 
   "files": ["dist/lib/**/*"]
}

```