# Add near the top:
import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

# Modify the target_metadata line to point to your Base:
from dependencies.base import Base  # Import your Base
target_metadata = Base.metadata