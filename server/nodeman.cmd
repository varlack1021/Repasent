@IF EXIST "%~dp0\/bin/bash.exe" (
  "%~dp0\/bin/bash.exe"  "%~dp0\node_modules\nodeman\bin\nodeman" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  /bin/bash  "%~dp0\node_modules\nodeman\bin\nodeman" %*
)