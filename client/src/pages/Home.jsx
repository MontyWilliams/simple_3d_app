import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';

import state from '../store';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation }
from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> GET IT HOMEBOY
              </h1>
            </motion.div>
          </motion.div>

          <motion.div {...headContentAnimation} className="flex flex-col gap-5">
            <p className="max-w-md font-normal text-gray-600 text-base">
              Create a 3d animated shirt bor bro. <strong>Also get your A.I. on</strong>
            </p>
            <CustomButton />
          </motion.div>

        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
