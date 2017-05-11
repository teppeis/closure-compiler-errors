# How to reproduce

```console
$ yarn install
$ yarn run closure -- --flagfile load-from-googmodule.conf
```

Output:

```
yarn run v0.23.4
$ closure-compiler --flagfile load-from-googmodule.conf
java.lang.RuntimeException: java.lang.RuntimeException: INTERNAL COMPILER ERROR.
Please report this problem.

INTERNAL COMPILER ERROR.
Please report this problem.

null
  Node(VAR): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');
  Parent(MODULE_BODY): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');

  Node(MODULE_BODY): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');
  Parent(SCRIPT): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');

	at com.google.javascript.jscomp.CompilerExecutor.runInCompilerThread(CompilerExecutor.java:126)
	at com.google.javascript.jscomp.Compiler.runInCompilerThread(Compiler.java:798)
	at com.google.javascript.jscomp.Compiler.compile(Compiler.java:768)
	at com.google.javascript.jscomp.Compiler.compile(Compiler.java:738)
	at com.google.javascript.jscomp.AbstractCommandLineRunner.doRun(AbstractCommandLineRunner.java:1093)
	at com.google.javascript.jscomp.AbstractCommandLineRunner.run(AbstractCommandLineRunner.java:492)
	at com.google.javascript.jscomp.CommandLineRunner.main(CommandLineRunner.java:1898)
Caused by: java.lang.RuntimeException: INTERNAL COMPILER ERROR.
Please report this problem.

INTERNAL COMPILER ERROR.
Please report this problem.

null
  Node(VAR): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');
  Parent(MODULE_BODY): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');

  Node(MODULE_BODY): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');
  Parent(SCRIPT): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');

	at com.google.common.base.Preconditions.checkState(Preconditions.java:429)
	at com.google.javascript.jscomp.TypedScopeCreator$AbstractScopeBuilder.assertDefinitionNode(TypedScopeCreator.java:766)
	at com.google.javascript.jscomp.TypedScopeCreator$AbstractScopeBuilder.defineVar(TypedScopeCreator.java:785)
	at com.google.javascript.jscomp.TypedScopeCreator$AbstractScopeBuilder.visit(TypedScopeCreator.java:559)
	at com.google.javascript.jscomp.TypedScopeCreator$LocalScopeBuilder.visit(TypedScopeCreator.java:2012)
	at com.google.javascript.jscomp.NodeTraversal.traverseBranch(NodeTraversal.java:662)
	at com.google.javascript.jscomp.NodeTraversal.traverseChildren(NodeTraversal.java:734)
	at com.google.javascript.jscomp.NodeTraversal.traverseModule(NodeTraversal.java:742)
	at com.google.javascript.jscomp.NodeTraversal.traverseBranch(NodeTraversal.java:654)
	at com.google.javascript.jscomp.NodeTraversal.traverse(NodeTraversal.java:316)
	at com.google.javascript.jscomp.NodeTraversal.traverseTyped(NodeTraversal.java:579)
	at com.google.javascript.jscomp.TypedScopeCreator$LocalScopeBuilder.build(TypedScopeCreator.java:1959)
	at com.google.javascript.jscomp.TypedScopeCreator.createScope(TypedScopeCreator.java:248)
	at com.google.javascript.jscomp.TypedScopeCreator.createScope(TypedScopeCreator.java:97)
	at com.google.javascript.jscomp.MemoizedScopeCreator.createScope(MemoizedScopeCreator.java:87)
	at com.google.javascript.jscomp.MemoizedScopeCreator.createScope(MemoizedScopeCreator.java:47)
	at com.google.javascript.jscomp.NodeTraversal.getScope(NodeTraversal.java:824)
	at com.google.javascript.jscomp.NodeTraversal.getTypedScope(NodeTraversal.java:840)
	at com.google.javascript.jscomp.TypeInferencePass$FirstScopeBuildingCallback.enterScope(TypeInferencePass.java:132)
	at com.google.javascript.jscomp.NodeTraversal.pushScope(NodeTraversal.java:775)
	at com.google.javascript.jscomp.NodeTraversal.traverseModule(NodeTraversal.java:741)
	at com.google.javascript.jscomp.NodeTraversal.traverseBranch(NodeTraversal.java:654)
	at com.google.javascript.jscomp.NodeTraversal.traverseChildren(NodeTraversal.java:734)
	at com.google.javascript.jscomp.NodeTraversal.handleScript(NodeTraversal.java:611)
	at com.google.javascript.jscomp.NodeTraversal.traverseBranch(NodeTraversal.java:637)
	at com.google.javascript.jscomp.NodeTraversal.traverseChildren(NodeTraversal.java:734)
	at com.google.javascript.jscomp.NodeTraversal.traverseBranch(NodeTraversal.java:658)
	at com.google.javascript.jscomp.NodeTraversal.traverseChildren(NodeTraversal.java:734)
	at com.google.javascript.jscomp.NodeTraversal.traverseBranch(NodeTraversal.java:658)
	at com.google.javascript.jscomp.NodeTraversal.traverseWithScope(NodeTraversal.java:371)
	at com.google.javascript.jscomp.TypeInferencePass.inferAllScopes(TypeInferencePass.java:102)
	at com.google.javascript.jscomp.TypeInferencePass.process(TypeInferencePass.java:72)
	at com.google.javascript.jscomp.DefaultPassConfig$45$1.process(DefaultPassConfig.java:1692)
	at com.google.javascript.jscomp.PhaseOptimizer$NamedPass.process(PhaseOptimizer.java:290)
	at com.google.javascript.jscomp.PhaseOptimizer.process(PhaseOptimizer.java:229)
	at com.google.javascript.jscomp.Compiler.check(Compiler.java:943)
	at com.google.javascript.jscomp.Compiler.compileInternal(Compiler.java:827)
	at com.google.javascript.jscomp.Compiler.access$000(Compiler.java:92)
	at com.google.javascript.jscomp.Compiler$3.call(Compiler.java:771)
	at com.google.javascript.jscomp.Compiler$3.call(Compiler.java:768)
	at com.google.javascript.jscomp.CompilerExecutor$2.call(CompilerExecutor.java:91)
	at java.util.concurrent.FutureTask.run(FutureTask.java:266)
	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)
	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)
	at java.lang.Thread.run(Thread.java:745)
Caused by: java.lang.RuntimeException: INTERNAL COMPILER ERROR.
Please report this problem.

null
  Node(VAR): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');
  Parent(MODULE_BODY): src/load-from-googmodule.js:1:0
goog.module('loadFromGoogModule');

	... 45 more
Caused by: java.lang.IllegalStateException
	... 45 more
error Command failed with exit code 254.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
