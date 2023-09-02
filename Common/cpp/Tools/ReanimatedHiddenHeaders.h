#pragma once

#ifdef ANDROID
#include <Reanimated/Logger.h>
#include <Reanimated/LoggerInterface.h>
#include <Reanimated/SpeedChecker.h>
#else
#include <Common/cpp/hidden_headers/Logger.h>
#include <Common/cpp/hidden_headers/LoggerInterface.h>
#include <Common/cpp/hidden_headers/SpeedChecker.h>
#endif
